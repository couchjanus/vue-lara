@extends('layouts.admin')

@section('content')
<!--start index content-->
            <div id="index">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h5 "><i class="fas fa-newspaper"></i> Articles</h1>
                    <div class="btn-toolbar mb-2 mb-md-0">
                        <button type="button" class="btn btn-sm btn-success">create</button>
                    </div>
                </div>
                <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Header</th>
                        <th>Header</th>
                        <th>Header</th>
                        <th>Setting</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1,001</td>
                        <td>Lorem</td>
                        <td>ipsum</td>
                        <td>dolor</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-info my-0 mx-1">update</button>
                            <button type="button" class="btn btn-sm btn-danger my-0 mx-1">delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1,002</td>
                        <td>amet</td>
                        <td>consectetur</td>
                        <td>adipiscing</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-outline-success px-3 my-0 mx-1"><i class="far fa-check-square"></i></button>
                            <button type="button" class="btn btn-sm btn-outline-warning px-3 my-0 mx-1"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-sm btn-outline-danger px-3 my-0 mx-1"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1,003</td>
                        <td>Integer</td>
                        <td>nec</td>
                        <td>odio</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-success px-3 my-0 mx-1"><i class="far fa-check-square"></i></button>
                            <button type="button" class="btn btn-sm btn-warning px-3 my-0 mx-1"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-sm btn-danger px-3 my-0 mx-1"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1,003</td>
                        <td>libero</td>
                        <td>Sed</td>
                        <td>cursus</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-success px-3 my-0 mx-1"><i class="far fa-check-square"></i></button>
                            <button type="button" class="btn btn-sm btn-warning px-3 my-0 mx-1"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-sm btn-danger px-3 my-0 mx-1"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1,004</td>
                        <td>dapibus</td>
                        <td>diam</td>
                        <td>Sed</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-success px-3 my-0 mx-1"><i class="far fa-check-square"></i></button>
                            <button type="button" class="btn btn-sm btn-warning px-3 my-0 mx-1"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-sm btn-danger px-3 my-0 mx-1"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1,005</td>
                        <td>Nulla</td>
                        <td>quis</td>
                        <td>sem</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-success px-3 my-0 mx-1"><i class="far fa-check-square"></i></button>
                            <button type="button" class="btn btn-sm btn-warning px-3 my-0 mx-1"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-sm btn-danger px-3 my-0 mx-1"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1,006</td>
                        <td>nibh</td>
                        <td>elementum</td>
                        <td>imperdiet</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-success px-3 my-0 mx-1"><i class="far fa-check-square"></i></button>
                            <button type="button" class="btn btn-sm btn-warning px-3 my-0 mx-1"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-sm btn-danger px-3 my-0 mx-1"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1,007</td>
                        <td>sagittis</td>
                        <td>ipsum</td>
                        <td>Praesent</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-success px-3 my-0 mx-1"><i class="far fa-check-square"></i></button>
                            <button type="button" class="btn btn-sm btn-warning px-3 my-0 mx-1"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-sm btn-danger px-3 my-0 mx-1"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1,008</td>
                        <td>Fusce</td>
                        <td>nec</td>
                        <td>tellus</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-success px-3 my-0 mx-1"><i class="far fa-check-square"></i></button>
                            <button type="button" class="btn btn-sm btn-warning px-3 my-0 mx-1"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-sm btn-danger px-3 my-0 mx-1"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1,009</td>
                        <td>augue</td>
                        <td>semper</td>
                        <td>porta</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-success px-3 my-0 mx-1"><i class="far fa-check-square"></i></button>
                            <button type="button" class="btn btn-sm btn-warning px-3 my-0 mx-1"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-sm btn-danger px-3 my-0 mx-1"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1,010</td>
                        <td>massa</td>
                        <td>Vestibulum</td>
                        <td>lacinia</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-success px-3 my-0 mx-1"><i class="far fa-check-square"></i></button>
                            <button type="button" class="btn btn-sm btn-warning px-3 my-0 mx-1"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-sm btn-danger px-3 my-0 mx-1"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1,011</td>
                        <td>eget</td>
                        <td>nulla</td>
                        <td>Class</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-success px-3 my-0 mx-1"><i class="far fa-check-square"></i></button>
                            <button type="button" class="btn btn-sm btn-warning px-3 my-0 mx-1"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-sm btn-danger px-3 my-0 mx-1"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1,012</td>
                        <td>taciti</td>
                        <td>sociosqu</td>
                        <td>ad</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-success px-3 my-0 mx-1"><i class="far fa-check-square"></i></button>
                            <button type="button" class="btn btn-sm btn-warning px-3 my-0 mx-1"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-sm btn-danger px-3 my-0 mx-1"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1,013</td>
                        <td>torquent</td>
                        <td>per</td>
                        <td>conubia</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-success px-3 my-0 mx-1"><i class="far fa-check-square"></i></button>
                            <button type="button" class="btn btn-sm btn-warning px-3 my-0 mx-1"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-sm btn-danger px-3 my-0 mx-1"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1,014</td>
                        <td>per</td>
                        <td>inceptos</td>
                        <td>himenaeos</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-success px-3 my-0 mx-1"><i class="far fa-check-square"></i></button>
                            <button type="button" class="btn btn-sm btn-warning px-3 my-0 mx-1"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-sm btn-danger px-3 my-0 mx-1"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>1,015</td>
                        <td>sodales</td>
                        <td>ligula</td>
                        <td>in</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-success px-3 my-0 mx-1"><i class="far fa-check-square"></i></button>
                            <button type="button" class="btn btn-sm btn-warning px-3 my-0 mx-1"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-sm btn-danger px-3 my-0 mx-1"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>
            <!--end of index content-->
@endsection
