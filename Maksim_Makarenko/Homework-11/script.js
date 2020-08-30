//===================== MAIN =====================
var loadData = document.getElementById( 'loadData' );

//===================== HELPERS =====================
function setTabs( tabs ) {
   document.getElementById( 'tabs' ).innerHTML = tabs;
}

function setBody( body ) {
   document.getElementById( 'tabsBody' ).innerHTML = body;
}

//===================== TEMPLATES =====================
var tabTmpl = ( person, index ) => {
   var active = index === 0 ? ' active' : '';
   return '<div class="tabs-nav__item' + active + '" data-tab-name="tab-' + person.id + '">' +
      'User ' + ++index + '</div>';
};
var tabBodyTmpl = ( person, index ) => {
   var active = index === 0 ? ' active' : '';
   return '<div class="tab tab-' + person.id + active + '">' +
      '<div class="row">' +
      '<div>' +
      '<img src="' + person.avatar + '" alt="' + person.first_name + '" title="' + person.first_name + '" class="img-thumbnail">' +
      '</div>' +
      '<div>' +
      '<p>First Name: ' + person.first_name + '</p>' +
      '<p>Last Name: ' + person.last_name + '</p>' +
      '</div>' +
      '</div>' +
      '</div>';
};

function getTemplate( persons ) {
   var $tabs = $body = '';
   
   persons.forEach( ( person, index ) => {
      $tabs += tabTmpl( person, index );
      $body += tabBodyTmpl( person, index );
   } );
   
   setTabs( $tabs );
   setBody( $body );
}

//===================== PAGE LOAD =====================
document.addEventListener( 'DOMContentLoaded', function() {
   if ( localStorage.getItem( 'persons' ) ) {
      var ls_data = localStorage.getItem( 'persons' );
      getTemplate( JSON.parse( ls_data ) );
   }
   
   tabs();
} );

//===================== SEND REQUEST =====================
loadData.addEventListener( 'click', function() {
   var url = 'https://reqres.in/api/users?page=2';
   // var url = 'https://reqres.in/api2/users?page=2';
   // var url = 'https://reqres1.in/api/users?page=2';
   var xhr = new XMLHttpRequest();
   xhr.open( 'GET', url );
   
   xhr.onload = function() {
      try {
         var persons = JSON.parse( this.response ).data;
         // var persons = [];
         if ( persons.length > 0 ) {
            localStorage.setItem( 'persons', JSON.stringify( persons ) );
            getTemplate( persons );
         } else {
            setBody( 'Информация для загрузки не найдена' );
         }
         tabs();
      } catch (error) {
         if ( this.status === 404 ) {
            showMessage( '404 Страница не найдена.' )
         } else {
            showMessage( error.message )
         }
      }
   };
   
   xhr.onerror = function() {
      showMessage( 'Некорректный адрес страницы для загрузки данных.' )
   };
   
   xhr.send();
} );

//===================== SHOW ERRORS =====================
function showMessage( msg ) {
   var err = document.getElementById( 'err' );
   err.innerHTML = '';
   var body = document.createElement( 'div' );
   body.className = 'alert alert-danger';
   body.innerHTML = msg;
   err.appendChild( body );
   err.classList.toggle( 'show' );
}

//===================== TABS =====================
function tabs() {
   var tabNav = document.querySelectorAll( '.tabs-nav__item' ),
      tabContent = document.querySelectorAll( '.tab' ),
      tabName;
   
   tabNav.forEach( item => {
      item.addEventListener( 'click', selectTabNav )
   } );
   
   function selectTabNav() {
      tabNav.forEach( item => {
         item.classList.remove( 'active' );
      } );
      this.classList.add( 'active' );
      tabName = this.getAttribute( 'data-tab-name' );
      selectTabContent( tabName );
   }
   
   function selectTabContent( tabName ) {
      tabContent.forEach( item => {
         item.classList.contains( tabName ) ? item.classList.add( 'active' ) : item.classList.remove( 'active' );
      } )
   }
};
