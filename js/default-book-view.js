var init = function(container) {
  var instance;
  if(window.jQuery) {
    var $ = window.jQuery;
    instance = {
      floatWnd: container.find('.float-wnd'),
      binds: {
        showDropMenu: function(e) {
          e.preventDefault();
          var el = $(e.target);
          while(!el.hasClass('toggle')) {
            el = $(el[0].parentNode);
          }
          var menu = el.find('.menu');
          if(menu.hasClass('hidden')) {
            container.find('.fb3d .fnavbar .menu').addClass('hidden');
            menu.removeClass('hidden');
            e.stopPropagation();
          }
        },
        hideDropMenu: function() {
          container.find('.fb3d .fnavbar .menu').addClass('hidden');
        },
        pickFloatWnd: function(e) {
          if(instance.pos) {
            instance.binds.dropFloatWnd();
          }
          else {
            instance.pos = {
              x: e.pageX,
              y: e.pageY
            };
          }
        },
        moveFloatWnd: function(e) {
          if(instance.pos) {
            var dv = {
              x: e.pageX-instance.pos.x,
              y: e.pageY-instance.pos.y
            }, old = {
              x: parseInt(instance.floatWnd.css('left')),
              y: parseInt(instance.floatWnd.css('top'))
            };
            instance.floatWnd.css('left', old.x+dv.x+'px').css('top', old.y+dv.y+'px');
            instance.pos = {
              x: e.pageX,
              y: e.pageY
            };
          }
        },
        dropFloatWnd: function() {
          delete instance.pos;
        }
      },
      dispose: function() {
        container.find('.fb3d .fnavbar .fnav .toggle').off('click', instance.binds.showDropMenu);
        $(container[0].ownerDocument).off('click', instance.binds.hideDropMenu);

        $(container[0].ownerDocument).off('mousemove', instance.binds.moveFloatWnd);
        $(container[0].ownerDocument).off('mouseup', instance.binds.dropFloatWnd);
        instance.floatWnd.find('.header').off('mousedown', instance.binds.pickFloatWnd);
      }
    };
    container.find('.fb3d .fnavbar .fnav .toggle').on('click', instance.binds.showDropMenu);
    $(container[0].ownerDocument).on('click', instance.binds.hideDropMenu);

    $(container[0].ownerDocument).on('mousemove', instance.binds.moveFloatWnd);
    $(container[0].ownerDocument).on('mouseup', instance.binds.dropFloatWnd);
    instance.floatWnd.find('.header').on('mousedown', instance.binds.pickFloatWnd);
  }
  else {
    instance = {
      dispose: function() {
      }
    };
    console.error('jQuery is not found');
  }
  return instance;
}; init
