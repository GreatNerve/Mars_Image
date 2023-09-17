
const loader = `<div class="card mb-3 rounded d-flex justify-content-center align-items-center bg-light loader gradient"><div class="m-3 spinner-border text-success" role="status"><span class="sr-only">Loading...</span></div>Loading...</div>`;
function backToHome() {
    $('.back-home').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600, 'swing');
        $('.nav-item.active').removeClass('active');
        $('.nav-link:contains(home)').closest('.nav-item').addClass('active');
        if (!$('#gallery').hasClass('active')) {
            $('section.active').removeClass('active');
            $('#gallery').addClass('active');
        }
    });  
  return false;
}

var gallery;
var article;
$(document).ready(function () {
    $('#about').addClass('active');
    $('#gallery').addClass('active');
    $('#about.active').removeClass('active');
    Swal.fire({
        icon: 'success',
        title: "Mars",
        text: `Welcome all the space lovers.`,
        footer: `<span>Developed by : <a target="_blank" class="me" href="https://github.com/GreatNerve">Dheeraj Sharma</a></span>`
    });
    $('#gallery-area').empty();
    $('#article-area').empty();
    $('.venobox').venobox({ titleattr: 'data-title', share: ['facebook', 'twitter', 'linkedin', 'pinterest', 'download'] });
    $(document).on('click', '.navbar-toggler', function (e) {
        $('#navbararea').toggleClass('show');
        $('.nav-mob-overly').fadeToggle(400);
        $('.navbar-toggler i').toggleClass('fa-bars fa-times');
        return false;
    });
    $(document).click(function (e) {
        let navToggle = $(".navbar-toggler");
        if (!navToggle.is(e.target) && navToggle.has(e.target).length === 0) {
            if ($('#navbararea').hasClass('show')) {
                $('#navbararea').removeClass('show');
                $('.nav-mob-overly').fadeOut(400);
                $('.navbar-toggler i').toggleClass('fa-bars fa-times');
            }
        }
    });
    startup();
    window.addEventListener('online', function () {
        let card = document.getElementById('gallery').getElementsByClassName('card');
        if (card.length == 1) {
            startup();
        }
        return false;
    });
});
function startup() {
    article = new Wikipedia();
    $(".navbar-brand").click(function (event) {
        event.preventDefault();
        $('section.active').removeClass('active');
        let l = $(loader);
        l.addClass('container');
        $('#article-area').append(l);
        $('.nav-item.active').removeClass('active');
        $('.nav-link:contains(about)').closest('.nav-item').addClass('active');
        $('#article').toggleClass('active');
        article.GetArticle('14640471', 'pageids');
    });
    $('.nav-link:contains(home)').click(function (e) {
        $('html, body').animate({
            scrollTop: 0
        }, 1000, 'swing');
        let elem;
        e.preventDefault();
        $('.nav-item.active').removeClass('active');
        $(this).closest('.nav-item').addClass('active');
        $('section.active').removeClass('active');
        switch (this.innerText.toLowerCase()) {
            case 'about':
                $('#about').addClass('active');
                break;
            default:
                $('#gallery').addClass('active');
                elem = document.querySelectorAll('#gallery-area>.card:not(.loader)');
                if (elem.length == 0) {
                    gallery = new http('ksriEV9rsoIaTWvq6ZGhdWglSWWQ700zmABU11Yc');
                }
        }
    });
    gallery = new http('ksriEV9rsoIaTWvq6ZGhdWglSWWQ700zmABU11Yc');
    $('#date-input').change(function () {
        gallery = new http('ksriEV9rsoIaTWvq6ZGhdWglSWWQ700zmABU11Yc');

    });
    $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();
        let scrollHeight = $(document).height();
        let scrollPosition = $(this).height() + scrollTop;
        if (scrollTop > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
        if ((scrollHeight - scrollPosition) / scrollHeight <= 0.015) {
            if ($('#gallery').hasClass('active')) {
                gallery.addScrollContent();
            }
        }
        return false;
    });
    $('a.data-link').click(function (e) {
        $('html, body').animate({
            scrollTop: 0
        }, 1000, 'swing');
        e.preventDefault();
        let quarry = $(this).attr('href').trim().toLowerCase().replace('https://en.wikipedia.org/wiki?curid=', '');
        if (quarry) {
            article.GetArticle(quarry, 'pageids', elem = this);
        } else {
            Swal.fire({
                icon: 'error',
                title: "Invalid link",
                text: `Sorry, this link is invalid so we are not able to complete this request.`,
                footer: `<span>Developed by : <a target="_blank" class="me" href="https://github.com/GreatNerve">Dheeraj Sharma</a></span>`
            });
        }
    });

    $('.back-to-top').click(function () {
        gallery.addScrollContent()
        $('html, body').animate({
            scrollTop: 0
        }, 1000, 'swing');
        return false;
    });
    $(document).on('click', '.me', function (e) {
        $('html, body').animate({
            scrollTop: 0
        }, 1000, 'swing');
        if (!($('#about').find('h3').text() == 'Dheeraj Sharma')) {
            $('#about').empty();
            $('#about').append(`<div class=" d-flex flex-column align-items-center p-4">
            <div class="avatar">
                <img src="https://avatars.githubusercontent.com/u/63129298?v=4" alt="Dheeraj Sharma">
            </div>
            <div class="text-center px-3 py-2">
                <h3>Dheeraj Sharma</h3>
                <div class="social-links m-1 text-center">
                    <a href="https://in.linkedin.com/in/greatnerve" target="_blank">
                        <svg xmlns="https://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin"
                            viewBox="0 0 16 16">
                            <path
                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/greatnerve/?hl=en" target="_blank">
                        <svg xmlns="https://www.w3.org/2000/svg" fill="black" class="bi bi-instagram"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>
                    </a>
                    <a href="https://github.com/GreatNerve" target="_blank">
                        <svg xmlns="https://www.w3.org/2000/svg" fill="black" class="bi bi-github" viewBox="0 0 16 16">
                            <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>

                    <a href="https://www.kaggle.com/greatnerve" target="_blank">
                        <svg xmlns="https://www.w3.org/2000/svg" height="100%" viewBox="0 0 320 512">
                            <path
                                d="M304.2 501.5L158.4 320.3 298.2 185c2.6-2.7 1.7-10.5-5.3-10.5h-69.2c-3.5 0-7 1.8-10.5 5.3L80.9 313.5V7.5q0-7.5-7.5-7.5H21.5Q14 0 14 7.5v497q0 7.5 7.5 7.5h51.9q7.5 0 7.5-7.5v-109l30.8-29.3 110.5 140.6c3 3.5 6.5 5.3 10.5 5.3h66.9q5.25 0 6-3z" />
                        </svg>
                    </a>
                    <a href="https://twitter.com/GreatNerve" target="_blank">
                        <svg xmlns="https://www.w3.org/2000/svg" fill="dodgerblue" class="bi bi-twitter "
                            viewBox="0 0 16 16">
                            <path
                                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg></a>

                    <a href="https://www.sololearn.com/Profile/8384697" target="_blank"><img
                            src="https://www.sololearn.com//Images/favicon-192x192.png" alt="sololearn"></a>

                    <a href="https://stackoverflow.com/users/13444609/dheeraj-sharma" target="_blank"><img
                            src="https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png"
                            alt="Stack Overflow"></a>
                </div>
            </div>
            <h5 class="mx-3 text-break">This project is devloped by me for just fun.</h5>
            <button class="btn btn-outline-primary mt-2 back-home" type="button">Back to home</button>
        </div>
        </div>
        <hr>`);
        }
        e.preventDefault();
        Swal.close();
        $('.nav-item.active').removeClass('active');
        $('.nav-link:contains(about)').closest('.nav-item').addClass('active');

        if (!$('#about').hasClass('active')) {
            $('section.active').removeClass('active');
            $('#about').addClass('active');
        }
        backToHome();
    });
}

class http {

    constructor(api_key = "ksriEV9rsoIaTWvq6ZGhdWglSWWQ700zmABU11Yc", target = "#gallery-area", httpURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos") {
        this.pos = 0;
        this.photos;
        this.api_key = api_key;
        this.httpURL = httpURL;
        this.target = target;
        this.Get();
    }
    Get() {
        this.datePicker = document.querySelector("#date-input");
        if (this.datePicker.value == "" || this.datePicker.value == undefined || this.datePicker.value == null) {
            let curDate = new Date()
            curDate.setDate(curDate.getDate() - 1);
            this.datePicker.valueAsDate = curDate;
        }
        let DateQuarry = new Date(this.datePicker.valueAsDate);
        let curDate = new Date()
        if (DateQuarry.getFullYear() < curDate.getFullYear() ||
            (DateQuarry.getFullYear() == curDate.getFullYear() &&
            DateQuarry.getMonth() <= curDate.getMonth() &&
            (DateQuarry.getMonth() < curDate.getMonth() ? true : DateQuarry.getDate() < curDate.getDate()))
        ) {
            let dataSend = {
                "earth_date": `${DateQuarry.getUTCFullYear()}-${(DateQuarry.getUTCMonth() + 1).toString().padStart(2, "0")}-${DateQuarry.getUTCDate().toString().padStart(2, "0")}`,
                "api_key": this.api_key
            };
            $(`${this.target}>.loader`).remove();
            $(`${this.target}>.card`).hide();
            $(this.target).append(loader);
            let cls = this;
            jQuery.ajax({
                url: this.httpURL,
                type: "get",
                data: dataSend,
                async: true,
                timeout: 5000,
                dataType: 'json',
                success: function (responce, status, xhr) {
                    if (responce.photos != undefined && responce.photos != null && responce.photos.length > 0) {
                        $(cls.target).empty();
                        $(cls.target).append(loader);
                        cls.pos = 0;
                        cls.photos = responce.photos;
                        cls.addScrollContent();
                    } else {
                        cls.DateinputError("No image found", `Sorry, We didn't found any image on ${DateQuarry.toDateString()},`);
                    }
                },
                error: function (xhr, status, error) {
                    cls.dateFix();
                    if (error == "") {
                        Swal.fire({
                            icon: 'warning',
                            title: "No Internet",
                            html: `<div align="left">Try :<blockquote><small><ul><li>Checking the network cables, modem, and router</li><li>Reconnecting to Wi-Fi</li></ul></small></blockquote></div>`,
                            footer: `<span>Developed by : <a target="_blank" class="me" href="https://github.com/GreatNerve">Dheeraj Sharma</a></span>`
                        });

                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: error,
                            text: `Sorry, we are not able to complete this request.`,
                            footer: `<span>Developed by : <a target="_blank" class="me" href="https://github.com/GreatNerve">Dheeraj Sharma</a></span>`
                        });
                    }
                }
            });
        } else {
            this.dateFix();
            Swal.fire({
                icon: 'error',
                title: "Past days only are allow.",
                text: `Sorry, we are try to figure out the technology to get information from future.`,
                footer: `<span>Developed by : <a target="_blank" class="me" href="https://github.com/GreatNerve">Dheeraj Sharma</a></span>`
            });

        }
    }
    dateFix() {
        let card = document.getElementById('gallery').getElementsByClassName('card');
        let curDate = new Date();
        if (card.length > 1) {
            $(`${this.target}>.loader`).remove();
            $('.card').show();
            try {
                let preDate = card[0].getElementsByTagName('small')[0];
                if (preDate != undefined) {
                    this.datePicker.valueAsDate = (new Date(`${preDate.innerText} ${curDate.getUTCHours()}:${curDate.getUTCMinutes()}:${curDate.getUTCSeconds()} GMT`));
                }
            }
            catch (err) {
            }
        } else {
            curDate.setDate(curDate.getDate() - 1);
            this.datePicker.valueAsDate = curDate;

        }
    }
    DateinputError(heading = "", msg = "") {
        let date = new Date(this.datePicker.valueAsDate);
        date.setDate(date.getDate() - 1);
        Swal.fire({
            title: heading,
            html: `${msg} you want to stay on previous result or see result of ${date.toDateString()}.`,
            icon: 'error',
            footer: `<span>Developed by : <a target="_blank" class="me" href="https://github.com/GreatNerve">Dheeraj Sharma</a></span>`,
            showCancelButton: true,
            confirmButtonColor: '#aaa',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Stya there',
            cancelButtonText: "Redirect"
        }).then((result) => {
            if (result.value) {
                this.dateFix();
            } else {
                $(`${this.target}>.loader`).remove();
                this.datePicker.valueAsDate = date;
                this.Get(this.api_key);
            }
        })
    }
    addScrollContent(len) {
        if (this.pos != undefined && this.photos != undefined && this.photos.length > 0) {
            let add = (len != undefined || len != null) ? len : 2;
            this.pos = Math.min(this.pos, this.photos.length);
            let newPos = Math.min(this.pos + add, this.photos.length);
            let figure = this.photos.slice(this.pos, newPos);
            if (newPos > this.pos) {
                if (this.pos != 0) {
                    $(this.target).append(loader);
                }
                this.setGallery(figure, this.target);
                this.pos = newPos;
            }
        }
    }

    setGallery(data, target) {
        for (let card of data) {
            let elem = `<div class="card mb-3 rounded d-none">
                            <a class="venobox bg-secondary photo gradient" href="${card.img_src}" data-title='Sol ${card.sol} of ${card.rover.name} rover'>
                                <img src="${card.img_src}" class="card-img-top photo" alt="Sol ${card.sol}">
                            </a>
                        <div class="card-body">
                            <h5 class="card-title">Sol ${card.sol} of <a class="wiki" href='#'>${card.rover.name} rover</a></h5>
                            <p class="card-text">This images is take by ${card.camera.name}(${card.camera.full_name}) camera of <a class="wiki" href='#'>${card.rover.name} rover</a>.</p>
                            <p class="card-text"><small class="text-muted">${new Date(new Date(`${card.earth_date}T00:00:00+0000`)).toDateString()}</small></p>
                        </div>
                        </div>`;
            $(target).append(elem);
        }
        $("a.wiki").click(function (event) {
            event.preventDefault();
            $('section.active').removeClass('active');
            let l = $(loader);
            l.addClass('container');
            $('#article-area').append(l);
            $('.nav-item.active').removeClass('active');
            $('.nav-link:contains(about)').closest('.nav-item').addClass('active');
            $('#article-area').empty();
            $('#article').toggleClass('active');
            article.GetArticle(this.innerText);
        });
        $(`${this.target}>.loader`).remove();
        $('.venobox').venobox({ titleattr: 'data-title', share: ['facebook', 'twitter', 'linkedin', 'pinterest', 'download'] });
        $(`${this.target}>.card.d-none`).removeClass('d-none');
    }
}

class Wikipedia {
    constructor(target = '#article-area', apiURL = 'https://en.wikipedia.org/w/api.php') {
        this.apiURL = apiURL;
        this.target = target;
        this.article;
        this.suggestion = {
            key: Array(),
            value: Array(),
            status: true
        };
    }
    getSuggestion(elem, value) {
        let dataSend = {
            gsrsearch: value.trim().toLowerCase(),
            action: 'query',
            generator: 'search',
            utf8: 1,
            format: 'json'
        };
        let cls = this;
        jQuery.ajax({
            url: this.apiURL,
            type: 'get',
            data: dataSend,
            dataType: 'jsonp',
            timeout: 5000,
            crossDomain: true,
            async: true,
            success: function (responce, status, xhr) {
                if (status == 'success') {
                    try {
                        if (responce.query != undefined) {
                            let sortArray = Array();
                            for (let pg in responce.query.pages) {
                                sortArray.push(responce.query.pages[pg]);
                            }
                            sortArray.sort(function (el1, el2) {
                                return el1.index - el2.index;
                            });
                            for (let pg in sortArray) {
                                cls.suggestion.key.push(sortArray[pg].title.toLowerCase());
                                cls.suggestion.value.push(sortArray[pg].pageid);
                            }
                            cls.suggestion.status = true;
                            $(elem).autocomplete({
                                source: Array(...new Set(cls.suggestion.key))
                            });
                            $(elem).data("uiAutocomplete").search(value);
                            return true;
                        }
                    } catch (error) {

                    }
                }
            }
        });
    }
    GetArticle(value = 'Curiosity rover', type = 'titles', elem) {
        $(this.target).children('.loader').remove();
        $(this.target).children().hide();
        $(this.target).prepend(loader);
        let dataSend = {
            [type]: value.toString().trim().toLowerCase(),
            action: 'query',
            format: 'json',
            redirects: 1,
            prop: 'extracts',
            exintro: '',
            explaintext: ''
        };
        let cls = this;
        jQuery.ajax({
            url: this.apiURL,
            type: 'get',
            data: dataSend,
            dataType: 'jsonp',
            timeout: 5000,
            crossDomain: true,
            async: true,
            success: function (responce, status, xhr) {
                if (status == 'success') {
                    cls.article = responce;
                    for (let pg in cls.article.query.pages) {
                        if (pg != undefined && pg != '-1') {
                            let dataImgSend = {
                                pageids: pg,
                                action: 'query',
                                format: 'json',
                                redirects: 1,
                                prop: 'pageimages',
                                piprop: 'original'
                            };
                            jQuery.ajax({
                                url: cls.apiURL,
                                type: 'get',
                                data: dataImgSend,
                                dataType: 'jsonp',
                                timeout: 5000,
                                crossDomain: true,
                                async: true,
                                success: function (responce, status, xhr) {
                                    if (status == 'success') {
                                        $(cls.target).empty();
                                        $(cls.target).prepend(loader);
                                        try {
                                            cls.article.query.pages[pg].img = responce.query.pages[pg].original.source != undefined ? responce.query.pages[pg].original.source : '';
                                            cls.setArticle(pg, cls.target);
                                        } catch (error) {
                                            cls.article.query.pages[pg].img = '';
                                            cls.setArticle(pg, cls.target);
                                        }
                                    }
                                    return false;
                                },
                                error: function (xhr, status, error) {
                                    cls.article.query.pages[pg].img = '';
                                    cls.setArticle(pg, cls.target);
                                    return false;
                                }
                            });
                        } else {
                            $(cls.target).children().show();
                            if ($(cls.target).children('article').length > 0) {
                                $(cls.target).children('.loader').remove();
                            }
                            Swal.fire({
                                icon: 'error',
                                title: "No article found",
                                text: `Sorry, We didn't found any article related on subject ${value}.`,
                                footer: `<span>Developed by : <a target="_blank" class="me" href="https://github.com/GreatNerve">Dheeraj Sharma</a></span>`
                            });
                            return false;
                        }
                    }
                    if (elem) {
                        $('.nav-item.active').removeClass('active');
                        $(elem).closest('.nav-item').addClass('active');
                        if (!$('#article').hasClass('active')) {
                            $('section.active').removeClass('active');
                            $('#article').addClass('active');
                        }
                    }
                }
                return false;
            }, error: function (xhr, status, error) {
                $(cls.target).children().show();
                if ($(cls.target).children('article').length > 0) {
                    $(cls.target).children('.loader').remove();
                }
                if (error == "") {
                    Swal.fire({
                        icon: 'warning',
                        title: "No Internet",
                        html: `<div align="left">Try :<blockquote><small><ul><li>Checking the network cables, modem, and router</li><li>Reconnecting to Wi-Fi</li></ul></small></blockquote></div>`,
                        footer: `<span>Developed by : <a target="_blank" class="me" href="https://github.com/GreatNerve">Dheeraj Sharma</a></span>`
                    });

                } else {
                    Swal.fire({
                        icon: 'error',
                        title: error.toUpperCase(),
                        text: `Sorry, we are not able to complete this request.`,
                        footer: `<span>Developed by : <a target="_blank" class="me" href="https://github.com/GreatNerve">Dheeraj Sharma</a></span>`
                    });
                }
                return false;
            }
        });
    }
    setArticle(pg, target) {
        if (pg &&
            target &&
            this.article &&
            this.article.query.pages &&
            this.article.query.pages[pg]) {
            $('#quarry').blur();
            let elem = $(`<article></article>`);
            let div = $('<div></div>');
            let footer = $('<div></div>').attr({ align: 'center' });
            elem.attr({ class: 'container-fluid px-4 mb-1' });
            div.attr({ class: "clearfix" });
            if (this.article.query.pages[pg].img) {
                let aimg = $('<a></a>').attr({
                    class: 'venobox',
                    href: this.article.query.pages[pg].img,
                    'data-title': this.article.query.pages[pg].title
                });
                
                aimg.append($('<img>').attr({
                    class: 'mx-3 articleImg',
                    src: this.article.query.pages[pg].img
                }));
                div.append(aimg);
            }
            div.append($('<p></p>').text(this.article.query.pages[pg].extract));
            let div_buttons = $('<div></div');

            div_buttons.append($('<a></a>').attr({
                class: 'btn btn-outline-info w-auto m-2',
                href: `https://en.wikipedia.org/wiki?curid=${pg}`,
                target: '_blank'
            }).text('Full article'));
            div_buttons.append($('<button></button>').attr({
                class : 'btn btn-outline-success w-auto m-2 back-home',
                type : 'button'
            }).text('Back to home'));
            footer.append(div_buttons);
            footer.append($('<hr>'));

            elem.append($('<h3></h3>').text(this.article.query.pages[pg].title));
            elem.append($('<hr>').attr({ class: 'my-2' }));
            elem.append(div);
            elem.append(footer);
            elem.hide();
            $(target).append(elem);

            backToHome();
            $(this.target).children('.loader').fadeOut(200, function () {
                $(this).remove();
            });
            elem.fadeIn(2200);
            $('.venobox').venobox({ spinner: 'three-bounce', titleattr: 'data-title', share: ['facebook', 'twitter', 'linkedin', 'pinterest', 'download'] });
            return false;

        }
    }
}
