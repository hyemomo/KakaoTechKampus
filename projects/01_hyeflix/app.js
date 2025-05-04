const searchBtn = document.querySelector(".searchBtn");
const mainH1 = document.querySelector(".main-container h1");
const mainP = document.querySelector(".main-container p");
const movieList = document.querySelector(".movieList");
const movieCard = document.querySelector(".movie-card");
const closeBtn = document.querySelector(".close-modal");
const modal = document.querySelector("#movieModal");
//fetch 기본 옵션
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDFjOGYzZDFiZjU0OGQ1NjVlNWU2OTJlMzM4YTk3NSIsIm5iZiI6MTc0NjIzMjk4OS4zNjQsInN1YiI6IjY4MTU2NjlkMTkyZjRmYTdjMTg0YzdmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._tOKXeMUmDxoKQvuCK6FuOFxmFoXS_jTHXq3OJM3VMM",
  },
};
const fetchMovieImageUrl = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/images`,
    options
  );
  const data = await res.json();
  const img_code = data.posters[0]["file_path"];
  const url = `https://image.tmdb.org/t/p/w500${img_code}`;
  return url;
};
//인기영화 목록을 fetch로 가져오기
const fetchPopularMovies = async () => {
  try {
    movieList.textContent = "";
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const data = await res.json();
    const results = data.results;
    renderMovieCard(results);
  } catch (err) {
    console.log(err);
  }
};
const renderMovieCard = async (results) => {
  for (const item of results) {
    const title = item.title;
    const id = item.id;
    const rate = item.vote_average;
    const genre_ids = item.genre_ids;
    const release_date = item.release_date;
    const imgUrl = await fetchMovieImageUrl(id);
    const temp_html = `<li class="movie-card" id=${id}>
            <img src=${imgUrl} alt="영화 제목" />
            <div class="movie-info" >
              <h3>${title}</h3>
              <p>⭐ 평점: ${rate}</p>
              <p>📅 개봉일: ${release_date}</p>
            </div>
          </li>`;

    movieList.innerHTML += temp_html;
  }
};
//영화 제목 검색해서 영화목록 fetch로 가져오는 함수
const fetchSearchMovies = async () => {
  movieList.innerHTML = "";
  const input = document.querySelector(".search-form input");
  const input_text = input.value;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${input_text}&include_adult=false&language=en-US&page=1`,
    options
  );
  const data = await res.json();
  const results = data.results;
  mainH1.textContent = `"${input_text}"에 대한 검색 결과입니다`;
  mainP.textContent = `검색 결과  ${results.length}개`;

  renderMovieCard(results);
};
//영화 상세 모달 보여주는 함수
const showMovieDetail = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  const data = await res.json();
  const backdrop_path = `https://image.tmdb.org/t/p/w500${data.backdrop_path}`;
  const title = data.title;
  const overview = data.overview;
  const runtime = data.runtime;
  const vote_average = data.vote_average;
  const genres = data.genres.map((item) => item.name).join(",");
  const release_date = data.release_date;
  const modal = document.querySelector("#movieModal");
  const modalDetails = modal.querySelector(".modal-details");

  modalDetails.innerHTML = `
      <img src="${backdrop_path}" alt="${title}" />
      <div class="details-container">
      <h2>${title}</h2>
      <p>장르:</strong> ${genres}</p>
      <p>상영시간: ${runtime}분</p>
      <p>평점:⭐ ${vote_average}</p>
      <p>개봉일: ${release_date}</p>
      <p>줄거리:< ${overview}</p></div>
    `;
  modal.classList.remove("hidden");
};

searchBtn.addEventListener("click", fetchSearchMovies);
fetchPopularMovies();
movieList.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  const id = li.id;
  showMovieDetail(id);
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

const form = document.querySelector(".search-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchSearchMovies();
});