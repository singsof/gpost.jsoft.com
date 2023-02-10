<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title')</title>

    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">

    @vite(['resources/css/adminlte/adminlte.css', 'resources/js/adminlte/adminlte.js',])
    @vite(['resources/js/pluginslte.js','resources/js/Chart.js'])
    <script src="{{ asset('plugins/jquery/jquery.min.js') }}"></script>

    @yield('head')

</head>

<body class="hold-transition sidebar-mini layout-navbar-fixed layout-footer-fixed layout-fixed  ">
    <div class="wrapper">
        <div class="preloader flex-column justify-content-center align-items-center">
            <img class="animation__wobble" src="{{ asset('assets/img/AdminLTELogo.png') }}" alt="AdminLTELogo"
                height="60" width="60">
        </div>

        @yield('nabarManu')

        <aside class="main-sidebar sidebar-light-lime elevation-4">
            <!-- Brand Logo -->
            <a href="#" class="brand-link text-sm">
                <img src="{{ asset('assets/img/AdminLTELogo.png') }}" alt="AdminLTE Logo"
                    class="brand-image img-circle elevation-3" style="opacity: .8">
                <span class="brand-text font-weight-light">{{ env('APP_NAME') }}</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img src="{{ asset('assets/img/user2-160x160.jpg') }}" class="img-circle elevation-2"
                            alt="User Image">
                    </div>
                    <div class="info">
                        <a href="#" class="d-block">Alexander Pierce</a>
                    </div>
                </div>

                <!-- SidebarSearch Form -->
                <div class="form-inline">
                    <div class="input-group" data-widget="sidebar-search">
                        <input class="form-control form-control-sidebar" type="search" placeholder="Search"
                            aria-label="Search">
                        <div class="input-group-append">
                            <button class="btn btn-sidebar">
                                <i class="fas fa-search fa-fw"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Sidebar Menu -->


                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar   flex-column  nav-legacy nav-collapse-hide-child nav-child-indent "
                        data-widget="treeview" role="menu" data-accordion="false">
                        @yield('sidebarManu')
                    </ul>
                </nav>


                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>

        <div class="content-wrapper">


            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">@yield('title')</h1>
                        </div><!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                @yield('nav-menu-path')
                            </ol>
                        </div><!-- /.col -->
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            @yield('content')
        </div>

        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
            <div class="p-3">
                <h5>Title</h5>
                <p>Sidebar content</p>
            </div>
        </aside>
        <!-- /.control-sidebar -->

        <!-- Main Footer -->
        <footer class="main-footer">
            <!-- To the right -->
            <div class="float-right d-none d-sm-inline">
                สมพล วิลา
            </div>
            <!-- Default to the left -->
            <strong>Copyright &copy; 2023-2024 <a href="singsoft.co.th">singsoft.com</a>.</strong> All rights
            reserved.
        </footer>
    </div>
    <!-- ./wrapper -->

    @yield('scripts')

    {{-- <script src="{{ asset('plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script> --}}
    <!-- overlayScrollbars -->
    {{-- <script src="{{ asset('plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js') }}"></script> --}}
    <!-- AdminLTE App -->
    {{-- <script src="{{ asset('assets/js/adminlte.js') }}"></script> --}}

    {{-- <script src="{{ asset('plugins/jquery-mousewheel/jquery.mousewheel.js') }}"></script> --}}
    {{-- <script src="{{ asset('plugins/raphael/raphael.min.js') }}"></script> --}}
    {{-- <script src="{{ asset('plugins/jquery-mapael/jquery.mapael.min.js') }}"></script> --}}
    {{-- <script src="{{ asset('plugins/jquery-mapael/maps/usa_states.min.js') }}"></script> --}}
    <!-- ChartJS -->
    {{-- <script src="{{ asset('plugins/chart.js/Chart.min.js') }}"></script> --}}
    <!-- AdminLTE for demo purposes -->
    <script src="{{ asset('assets/sorage/js/demo.js') }}"></script>
    <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
    <script src="{{ asset('assets/sorage/js/pages/dashboard2.js') }}"></script>
</body>

</html>
