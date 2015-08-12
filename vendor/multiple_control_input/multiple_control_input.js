/* MIT-License alilishan
 * http://bootsnipp.com/snippets/featured/multiple-control-input-group
 */

$(document).ready(function (e) {

    $(document).on('click', '.bs-dropdown-to-price-m2 .dropdown-menu li', function (event) {
        var $target = $(event.currentTarget);
        $target.closest('.bs-dropdown-to-price-m2')
                .find('[data-bind="bs-drp-sel-price-m2"]').val($target.attr('data-price-m2'))
                .end()
                .children('.dropdown-toggle').dropdown('toggle');
        $target.closest('.bs-dropdown-to-price-m2')
                .find('[data-bind="bs-drp-sel-price-m2"]').text($target.attr('data-price-m2'));/*$target.text()*/
        return false;
    });

    $(document).on('click', '.bs-dropdown-to-immovible-kind .dropdown-menu li', function (event) {
        var $target = $(event.currentTarget);
        $target.closest('.bs-dropdown-to-immovible-kind')
                .find('[data-bind="bs-drp-sel-immovible-kind"]').val($target.attr('data-immovible-kind'))
                .end()
                .children('.dropdown-toggle').dropdown('toggle');
        $target.closest('.bs-dropdown-to-immovible-kind')
                .find('[data-bind="bs-drp-sel-immovible-kind"]').text($target.attr('data-immovible-kind'));/*$target.text()*/
        return false;
    });

});
// MIT-License alilishan End

$(document).ready(function (e) {

    $('.btn-toggle-buy-rent').click(function () {
        $(this).find('.btn-buy-rent').toggleClass('active');

        if ($(this).find('.btn-primary').size() > 0) {
            $(this).find('.btn-buy-rent').toggleClass('btn-default');
        }

        $(this).find('.btn-buy-rent').toggleClass('btn-primary');

    });
});