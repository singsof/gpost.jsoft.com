<!doctype html>
<html class="no-js" lang="en">

<!-- index.html  03:25:08 GMT -->

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>@yield('title') {{ env('APP_NAME') }}</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico">


    <!-- Plugins CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/plugins.css') }}">
    <!-- Main Style CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/css/custom.css') }}">
    {{-- <link rel="stylesheet" href="{{ asset('store/drophut/css/drophut.css') }}"> --}}


</head>

<body>

    <!--header area start-->
    <!--Offcanvas menu area start-->
    <div class="off_canvars_overlay">
    </div>
    @include('customer.layouts.menu')

    @yield('content')

    <!--footer area start-->
    <footer class="footer_widgets">
        <div class="footer_top">
            <div class="container">
                <div class="row">


                    <div class="col-lg-2 col-md-6 col-sm-6">
                        <div class="widgets_container widget_menu">
                            <h3>เมนูลัด</h3>
                            <div class="footer_menu">
                                <ul>
                                    <li><a href="#">เมนู 1</a></li>
                                    <li><a href="#">เมนู 2</a></li>
                                    <li><a href="#">เมนู 3</a></li>
                                    <li><a href="#">เมนู 4</a></li>
                                    <li><a href="#">เมนู 5</a></li>
                                    <li><a href="#">เมนู 6</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="widgets_container newsletter">
                            <h3>ติดตาม</h3>
                            <div class="footer_social_link">
                                <ul>
                                    <li><a class="facebook" href="#" title="Facebook"><i
                                                class="fa fa-facebook"></i></a></li>
                                    <li><a class="twitter" href="#" title="Twitter"><i
                                                class="fa fa-twitter"></i></a></li>
                                    <li><a class="instagram" href="#" title="instagram"><i
                                                class="fa fa-instagram"></i></a></li>
                                    <li><a class="linkedin" href="#" title="linkedin"><i
                                                class="fa fa-linkedin"></i></a></li>
                                    <li><a class="rss" href="#" title="rss"><i class="fa fa-rss"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer_bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <div class="copyright_area">
                            <p> สงวนลิขสิทธิ์ &copy; {{ date('Y') }} <a href="#">{{ env('APP_NAME') }}</a>
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="footer_payment text-right">
                            <a href="#"><img src="assets/img/icon/payment.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>



    <script src="{{ asset('plugins/drophut/plugins.js') }}"></script>
    <script src="{{ asset('plugins/drophut/main.js') }}"></script>
    <script src="{{ asset('store/drophut/js/drophut.min.js') }}"></script>


</body>

<!-- index.html  03:25:08 GMT -->

</html>
