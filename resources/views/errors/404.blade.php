@extends('customer.layouts.layouts')


@section('content')
    <!--breadcrumbs area start-->
    <div class="breadcrumbs_area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb_content">
                        <ul>
                            <li><a href="#">home</a></li>
                            <li>404 page</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--breadcrumbs area end-->


    <!--error section area start-->
    <div class="error_section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="error_form">
                        <img src="assets/img/404.jpg" alt=""/>
                        <h2>อุ๊ย! ไม่พบหน้า</h2>
                        <a href="javascript:wi" onclick="history.back()">Back to home page</a>
                    </div>
                    <script>

                    </script>
                </div>
            </div>
        </div>
    </div>
    <!--error section area end-->
@endsection
