describe('options', function() {
    $('body').append('<div id="test"></div>');
    $('body').append('<div id="test-data" data-option="test"></div>');
    it('should get options from arguments', function() {
        expect(window.sl.get_options($("#test"), [{
            "option": "test"
        }])).toEqual({
            "option": "test"
        });
    });
    it('should get options from data', function() {
        expect(window.sl.get_options($("#test-data"), [])).toEqual({
            "option": "test"
        });
    });
});

describe('overlay', function() {

    it('should open overlay', function() {
        window.sl.show_overlay();
        expect($(".overlay").stop(false,true).is(":visible")).toEqual(true);
    });

    it('should hide overlay', function() {
        window.sl.show_overlay();
        $(".overlay").click();
        expect($(".overlay").stop(false,true).is(":visible")).toEqual(false);
    });

    it('should toggle overlay', function() {
        window.sl.toggle_overlay();
        expect($(".overlay").stop(false,true).is(":visible")).toEqual(true);
        window.sl.toggle_overlay();
        expect($(".overlay").stop(false,true).is(":visible")).toEqual(false);
    });

});
