
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
        footer: `<span>Developed by : <a target="_blank" class="me" href="https://www.sololearn.com/Profile/8384697">Dheeraj Sharma</a></span>`
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
                footer: `<span>Developed by : <a target="_blank" class="me" href="https://www.sololearn.com/Profile/8384697">Dheeraj Sharma</a></span>`
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
            $('#about').append(`<div class=" d-flex flex-column align-items-center p-4"><div class="avatar"><img src="https://api.sololearn.com/Uploads/Avatars/8384697.jpg" alt="Dheeraj Sharma"></div><div class="text-center px-3 py-2"><h3>Dheeraj Sharma</h3><div class="social-links m-3 text-center"><a href="https://www.sololearn.com/Profile/8384697" target="_blank"><img src="https://www.sololearn.com//Images/favicon-192x192.png" alt="sololearn"></a><a href="https://github.com/GreatNerve" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Font_Awesome_5_brands_github.svg" alt="github"></a><a href="https://stackoverflow.com/users/13444609/dheeraj-sharma" target="_blank"><img src="https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png" alt="Stack Overflow"></a></div><h6 class="mx-3 text-break">This project is devloped by me for just fun.</h6><button class="btn btn-outline-primary mt-2 back-home" type="button">Back to home</button></div></div><hr>`);
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
                            footer: `<span>Developed by : <a target="_blank" class="me" href="https://www.sololearn.com/Profile/8384697">Dheeraj Sharma</a></span>`
                        });

                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: error,
                            text: `Sorry, we are not able to complete this request.`,
                            footer: `<span>Developed by : <a target="_blank" class="me" href="https://www.sololearn.com/Profile/8384697">Dheeraj Sharma</a></span>`
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
                footer: `<span>Developed by : <a target="_blank" class="me" href="https://www.sololearn.com/Profile/8384697">Dheeraj Sharma</a></span>`
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
            footer: `<span>Developed by : <a target="_blank" class="me" href="https://www.sololearn.com/Profile/8384697">Dheeraj Sharma</a></span>`,
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
                            <p class="card-text"><small class="text-muted">${new Date(new Date(`${card.earth_date} 00:00:00 GMT+0000`)).toDateString()}</small></p>
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
                                footer: `<span>Developed by : <a target="_blank" class="me" href="https://www.sololearn.com/Profile/8384697">Dheeraj Sharma</a></span>`
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
                        footer: `<span>Developed by : <a target="_blank" class="me" href="https://www.sololearn.com/Profile/8384697">Dheeraj Sharma</a></span>`
                    });

                } else {
                    Swal.fire({
                        icon: 'error',
                        title: error.toUpperCase(),
                        text: `Sorry, we are not able to complete this request.`,
                        footer: `<span>Developed by : <a target="_blank" class="me" href="https://www.sololearn.com/Profile/8384697">Dheeraj Sharma</a></span>`
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
