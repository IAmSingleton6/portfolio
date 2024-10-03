$(function() {
    const $filterButtons = $('.filter');
    const $articles = $('.tiles article');

    $filterButtons.on('click', function () {
        const filterValue = $(this).data('filter');

        // If the same button is clicked again, deactivate it
        if ($(this).hasClass('active')) {
            $filterButtons.removeClass('active'); // Remove active from all buttons
            $articles.show(); // Show all articles
        } else {
            // Otherwise, activate the clicked button and filter articles
            $filterButtons.removeClass('active'); // Remove active from all buttons
            $(this).addClass('active'); // Activate the clicked button
            
            $articles.each(function () {
                const category = $(this).data('category');
                if (category === filterValue) {
                    $(this).show(); // Show the article for the selected category
                } else {
                    $(this).hide(); // Hide the article
                }
            });
        }
    });
});
