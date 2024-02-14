$(document).ready(function () {
    console.log('Script is running'); // Vérifie si le script est exécuté

    // Pour chaque item du carrousel
    $('.owl-carousel .item').each(function () {
        // Récupérer la classe de couleur de fond
        var bgColorClass = $(this).attr('class').split(' ').find(c => c.startsWith('bg-'));

        // Log pour vérifier si la classe est récupérée correctement
        console.log('bgColorClass:', bgColorClass);

        // Si une classe de couleur de fond est trouvée
        if (bgColorClass) {
            // Appliquer cette classe au cadre autour de l'image
            $(this).find('.image-frame').addClass('border' + bgColorClass.substring(2));
        }
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<span class="btn btn-dark btn-lg">&lt;</span>', '<span class="btn btn-dark btn-lg">&gt;</span>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // Position des boutons de navigation
    var owlNav = $('.owl-nav');
    owlNav.addClass('d-flex justify-content-center');

    // Ajuster la marge entre les boutons
    owlNav.find('.owl-prev, .owl-next').addClass('mx-2');
});