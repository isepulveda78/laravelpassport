<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DeveloperController extends Controller
{
    public function __contstruct()
    {
        $this->middleware(['auth']);
    }

    public function index()
    {
        return view('developers.index');
    }
}
