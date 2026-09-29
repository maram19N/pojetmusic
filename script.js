// Données des films (exemple de films de science-fiction)
const movies = [
    {
        title: "Inception",
        year: 2010,
        description: "Un voleur qui s'empare des secrets d'entreprises grâce à la technologie du partage de rêves se voit confier une tâche inverse : implanter une idée dans l'esprit d'un PDG.",
        rating: 8.8,
        poster: "https://image.tmdb.org/t/p/w500/9gk7admal4ZLcnwnCSHMq9Z9DTy.jpg"
    },
    {
        title: "Interstellar",
        year: 2014,
        description: "Une équipe d'explorateurs voyage à travers un trou de ver dans l'espace dans une tentative d'assurer la survie de l'humanité.",
        rating: 8.6,
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
        title: "The Matrix",
        year: 1999,
        description: "Un programmeur informatique découvre que la réalité telle qu'il la connaît est une simulation créée par des machines, et rejoint une rébellion pour les combattre.",
        rating: 8.7,
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
    },
    {
        title: "Blade Runner 2049",
        year: 2017,
        description: "Un nouveau blade runner déterre un secret longtemps enfoui qui pourrait plonger ce qui reste de la société dans le chaos.",
        rating: 8.0,
        poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg"
    },
    {
        title: "Arrival",
        year: 2016,
        description: "Une linguiste travaille avec l'armée pour communiquer avec des extraterrestres venus sur Terre, et découvre que sa mission pourrait avoir des conséquences mondiales.",
        rating: 7.9,
        poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg"
    },
    {
        title: "Dune",
        year: 2021,
        description: "Un noble de la planète désertique Arrakis doit protéger sa famille et son peuple alors qu'ils s'affrontent dans une guerre pour la ressource la plus précieuse de l'univers.",
        rating: 8.0,
        poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
    }
];

// Fonction pour générer les étoiles de notation
function generateStars(rating) {
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = rating % 2 >= 1;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }

    if (hasHalfStar) {
        stars += '½';
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }

    return stars;
}

// Fonction pour créer une carte de film
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';

    card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" onerror="this.src='https://via.placeholder.com/500x750?text=No+Poster'">
        <div class="movie-info">
            <h2 class="movie-title">${movie.title}</h2>
            <p class="movie-year">${movie.year}</p>
            <p class="movie-description">${movie.description}</p>
            <div class="movie-rating">
                <span class="stars">${generateStars(movie.rating)}</span>
                <span class="rating-number">${movie.rating}/10</span>
            </div>
        </div>
    `;

    return card;
}

// Fonction principale pour afficher les films
function displayMovies() {
    const container = document.getElementById('moviesContainer');

    movies.forEach(movie => {
        const card = createMovieCard(movie);
        container.appendChild(card);
    });
}

// Initialisation lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', displayMovies);
