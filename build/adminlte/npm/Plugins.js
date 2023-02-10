'use strict'

const plugins = [
  // jQuery
  {
    from: 'node_modules/jquery/dist',
    to: 'public/plugins/jquery'
  },
  // Popper
  {
    from: 'node_modules/popper.js/dist',
    to: 'public/plugins/popper'
  },
  // Bootstrap
  {
    from: 'node_modules/bootstrap/dist/js',
    to: 'public/plugins/bootstrap/js'
  },
  // Font Awesome
  {
    from: 'node_modules/@fortawesome/fontawesome-free/css',
    to: 'public/plugins/fontawesome-free/css'
  },
  {
    from: 'node_modules/@fortawesome/fontawesome-free/webfonts',
    to: 'public/plugins/fontawesome-free/webfonts'
  },
  // overlayScrollbars
  {
    from: 'node_modules/overlayscrollbars/js',
    to: 'public/plugins/overlayScrollbars/js'
  },
  {
    from: 'node_modules/overlayscrollbars/css',
    to: 'public/plugins/overlayScrollbars/css'
  },
  // Chart.js
  {
    from: 'node_modules/chart.js/dist/',
    to: 'public/plugins/chart.js'
  },
  // jQuery UI
  {
    from: 'node_modules/jquery-ui-dist/',
    to: 'public/plugins/jquery-ui'
  },
  // Flot
  {
    from: 'node_modules/flot/dist/es5/',
    to: 'public/plugins/flot'
  },
  {
    from: 'node_modules/flot/source/',
    to: 'public/plugins/flot/public/plugins'
  },
  // Summernote
  {
    from: 'node_modules/summernote/dist/',
    to: 'public/plugins/summernote'
  },
  // Bootstrap Slider
  {
    from: 'node_modules/bootstrap-slider/dist/',
    to: 'public/plugins/bootstrap-slider'
  },
  {
    from: 'node_modules/bootstrap-slider/dist/css',
    to: 'public/plugins/bootstrap-slider/css'
  },
  // Bootstrap Colorpicker
  {
    from: 'node_modules/bootstrap-colorpicker/dist/js',
    to: 'public/plugins/bootstrap-colorpicker/js'
  },
  {
    from: 'node_modules/bootstrap-colorpicker/dist/css',
    to: 'public/plugins/bootstrap-colorpicker/css'
  },
  // Tempusdominus Bootstrap 4
  {
    from: 'node_modules/tempusdominus-bootstrap-4/build/js',
    to: 'public/plugins/tempusdominus-bootstrap-4/js'
  },
  {
    from: 'node_modules/tempusdominus-bootstrap-4/build/css',
    to: 'public/plugins/tempusdominus-bootstrap-4/css'
  },
  // Moment
  {
    from: 'node_modules/moment/min',
    to: 'public/plugins/moment'
  },
  {
    from: 'node_modules/moment/locale',
    to: 'public/plugins/moment/locale'
  },
  // FastClick
  {
    from: 'node_modules/fastclick/lib',
    to: 'public/plugins/fastclick'
  },
  // Date Range Picker
  {
    from: 'node_modules/daterangepicker/',
    to: 'public/plugins/daterangepicker'
  },
  // DataTables
  {
    from: 'node_modules/pdfmake/build',
    to: 'public/plugins/pdfmake'
  },
  {
    from: 'node_modules/jszip/dist',
    to: 'public/plugins/jszip'
  },
  {
    from: 'node_modules/datatables.net/js',
    to: 'public/plugins/datatables'
  },
  {
    from: 'node_modules/datatables.net-bs4/js',
    to: 'public/plugins/datatables-bs4/js'
  },
  {
    from: 'node_modules/datatables.net-bs4/css',
    to: 'public/plugins/datatables-bs4/css'
  },
  {
    from: 'node_modules/datatables.net-autofill/js',
    to: 'public/plugins/datatables-autofill/js'
  },
  {
    from: 'node_modules/datatables.net-autofill-bs4/js',
    to: 'public/plugins/datatables-autofill/js'
  },
  {
    from: 'node_modules/datatables.net-autofill-bs4/css',
    to: 'public/plugins/datatables-autofill/css'
  },
  {
    from: 'node_modules/datatables.net-buttons/js',
    to: 'public/plugins/datatables-buttons/js'
  },
  {
    from: 'node_modules/datatables.net-buttons-bs4/js',
    to: 'public/plugins/datatables-buttons/js'
  },
  {
    from: 'node_modules/datatables.net-buttons-bs4/css',
    to: 'public/plugins/datatables-buttons/css'
  },
  {
    from: 'node_modules/datatables.net-colreorder/js',
    to: 'public/plugins/datatables-colreorder/js'
  },
  {
    from: 'node_modules/datatables.net-colreorder-bs4/js',
    to: 'public/plugins/datatables-colreorder/js'
  },
  {
    from: 'node_modules/datatables.net-colreorder-bs4/css',
    to: 'public/plugins/datatables-colreorder/css'
  },
  {
    from: 'node_modules/datatables.net-fixedcolumns/js',
    to: 'public/plugins/datatables-fixedcolumns/js'
  },
  {
    from: 'node_modules/datatables.net-fixedcolumns-bs4/js',
    to: 'public/plugins/datatables-fixedcolumns/js'
  },
  {
    from: 'node_modules/datatables.net-fixedcolumns-bs4/css',
    to: 'public/plugins/datatables-fixedcolumns/css'
  },
  {
    from: 'node_modules/datatables.net-fixedheader/js',
    to: 'public/plugins/datatables-fixedheader/js'
  },
  {
    from: 'node_modules/datatables.net-fixedheader-bs4/js',
    to: 'public/plugins/datatables-fixedheader/js'
  },
  {
    from: 'node_modules/datatables.net-fixedheader-bs4/css',
    to: 'public/plugins/datatables-fixedheader/css'
  },
  {
    from: 'node_modules/datatables.net-keytable/js',
    to: 'public/plugins/datatables-keytable/js'
  },
  {
    from: 'node_modules/datatables.net-keytable-bs4/js',
    to: 'public/plugins/datatables-keytable/js'
  },
  {
    from: 'node_modules/datatables.net-keytable-bs4/css',
    to: 'public/plugins/datatables-keytable/css'
  },
  {
    from: 'node_modules/datatables.net-responsive/js',
    to: 'public/plugins/datatables-responsive/js'
  },
  {
    from: 'node_modules/datatables.net-responsive-bs4/js',
    to: 'public/plugins/datatables-responsive/js'
  },
  {
    from: 'node_modules/datatables.net-responsive-bs4/css',
    to: 'public/plugins/datatables-responsive/css'
  },
  {
    from: 'node_modules/datatables.net-rowgroup/js',
    to: 'public/plugins/datatables-rowgroup/js'
  },
  {
    from: 'node_modules/datatables.net-rowgroup-bs4/js',
    to: 'public/plugins/datatables-rowgroup/js'
  },
  {
    from: 'node_modules/datatables.net-rowgroup-bs4/css',
    to: 'public/plugins/datatables-rowgroup/css'
  },
  {
    from: 'node_modules/datatables.net-rowreorder/js',
    to: 'public/plugins/datatables-rowreorder/js'
  },
  {
    from: 'node_modules/datatables.net-rowreorder-bs4/js',
    to: 'public/plugins/datatables-rowreorder/js'
  },
  {
    from: 'node_modules/datatables.net-rowreorder-bs4/css',
    to: 'public/plugins/datatables-rowreorder/css'
  },
  {
    from: 'node_modules/datatables.net-scroller/js',
    to: 'public/plugins/datatables-scroller/js'
  },
  {
    from: 'node_modules/datatables.net-scroller-bs4/js',
    to: 'public/plugins/datatables-scroller/js'
  },
  {
    from: 'node_modules/datatables.net-scroller-bs4/css',
    to: 'public/plugins/datatables-scroller/css'
  },
  {
    from: 'node_modules/datatables.net-searchbuilder/js',
    to: 'public/plugins/datatables-searchbuilder/js'
  },
  {
    from: 'node_modules/datatables.net-searchbuilder-bs4/js',
    to: 'public/plugins/datatables-searchbuilder/js'
  },
  {
    from: 'node_modules/datatables.net-searchbuilder-bs4/css',
    to: 'public/plugins/datatables-searchbuilder/css'
  },
  {
    from: 'node_modules/datatables.net-searchpanes/js',
    to: 'public/plugins/datatables-searchpanes/js'
  },
  {
    from: 'node_modules/datatables.net-searchpanes-bs4/js',
    to: 'public/plugins/datatables-searchpanes/js'
  },
  {
    from: 'node_modules/datatables.net-searchpanes-bs4/css',
    to: 'public/plugins/datatables-searchpanes/css'
  },
  {
    from: 'node_modules/datatables.net-select/js',
    to: 'public/plugins/datatables-select/js'
  },
  {
    from: 'node_modules/datatables.net-select-bs4/js',
    to: 'public/plugins/datatables-select/js'
  },
  {
    from: 'node_modules/datatables.net-select-bs4/css',
    to: 'public/plugins/datatables-select/css'
  },

  // Fullcalendar
  {
    from: 'node_modules/fullcalendar/',
    to: 'public/plugins/fullcalendar'
  },
  // icheck bootstrap
  {
    from: 'node_modules/icheck-bootstrap/',
    to: 'public/plugins/icheck-bootstrap'
  },
  // inputmask
  {
    from: 'node_modules/inputmask/dist/',
    to: 'public/plugins/inputmask'
  },
  // ion-rangeslider
  {
    from: 'node_modules/ion-rangeslider/',
    to: 'public/plugins/ion-rangeslider'
  },
  // JQVMap (jqvmap-novulnerability)
  {
    from: 'node_modules/jqvmap-novulnerability/dist/',
    to: 'public/plugins/jqvmap'
  },
  // jQuery Mapael
  {
    from: 'node_modules/jquery-mapael/js/',
    to: 'public/plugins/jquery-mapael'
  },
  // Raphael
  {
    from: 'node_modules/raphael/',
    to: 'public/plugins/raphael'
  },
  // jQuery Mousewheel
  {
    from: 'node_modules/jquery-mousewheel/',
    to: 'public/plugins/jquery-mousewheel'
  },
  // jQuery Knob
  {
    from: 'node_modules/jquery-knob-chif/dist/',
    to: 'public/plugins/jquery-knob'
  },
  // pace-progress
  {
    from: 'node_modules/@lgaitan/pace-progress/dist/',
    to: 'public/plugins/pace-progress'
  },
  // Select2
  {
    from: 'node_modules/select2/dist/',
    to: 'public/plugins/select2'
  },
  {
    from: 'node_modules/@ttskch/select2-bootstrap4-theme/dist/',
    to: 'public/plugins/select2-bootstrap4-theme'
  },
  // Sparklines
  {
    from: 'node_modules/sparklines/source/',
    to: 'public/plugins/sparklines'
  },
  // SweetAlert2
  {
    from: 'node_modules/sweetalert2/dist/',
    to: 'public/plugins/sweetalert2'
  },
  {
    from: 'node_modules/@sweetalert2/theme-bootstrap-4/',
    to: 'public/plugins/sweetalert2-theme-bootstrap-4'
  },
  // Toastr
  {
    from: 'node_modules/toastr/build/',
    to: 'public/plugins/toastr'
  },
  // jsGrid
  {
    from: 'node_modules/jsgrid/dist',
    to: 'public/plugins/jsgrid'
  },
  {
    from: 'node_modules/jsgrid/demos/db.js',
    to: 'public/plugins/jsgrid/demos/db.js'
  },
  // flag-icon-css
  {
    from: 'node_modules/flag-icon-css/css',
    to: 'public/plugins/flag-icon-css/css'
  },
  {
    from: 'node_modules/flag-icon-css/flags',
    to: 'public/plugins/flag-icon-css/flags'
  },
  // bootstrap4-duallistbox
  {
    from: 'node_modules/bootstrap4-duallistbox/dist',
    to: 'public/plugins/bootstrap4-duallistbox/'
  },
  // filterizr
  {
    from: 'node_modules/filterizr/dist',
    to: 'public/plugins/filterizr/'
  },
  // ekko-lightbox
  {
    from: 'node_modules/ekko-lightbox/dist',
    to: 'public/plugins/ekko-lightbox/'
  },
  // bootstrap-switch
  {
    from: 'node_modules/bootstrap-switch/dist',
    to: 'public/plugins/bootstrap-switch/'
  },
  // jQuery Validate
  {
    from: 'node_modules/jquery-validation/dist/',
    to: 'public/plugins/jquery-validation'
  },
  // bs-custom-file-input
  {
    from: 'node_modules/bs-custom-file-input/dist/',
    to: 'public/plugins/bs-custom-file-input'
  },
  // bs-stepper
  {
    from: 'node_modules/bs-stepper/dist/',
    to: 'public/plugins/bs-stepper'
  },
  // CodeMirror
  {
    from: 'node_modules/codemirror/lib/',
    to: 'public/plugins/codemirror'
  },
  {
    from: 'node_modules/codemirror/addon/',
    to: 'public/plugins/codemirror/addon'
  },
  {
    from: 'node_modules/codemirror/keymap/',
    to: 'public/plugins/codemirror/keymap'
  },
  {
    from: 'node_modules/codemirror/mode/',
    to: 'public/plugins/codemirror/mode'
  },
  {
    from: 'node_modules/codemirror/theme/',
    to: 'public/plugins/codemirror/theme'
  },
  // dropzonejs
  {
    from: 'node_modules/dropzone/dist/',
    to: 'public/plugins/dropzone'
  },
  // uPlot
  {
    from: 'node_modules/uplot/dist/',
    to: 'public/plugins/uplot'
  }
]

module.exports = plugins
