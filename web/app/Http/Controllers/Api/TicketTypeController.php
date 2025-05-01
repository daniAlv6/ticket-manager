<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TicketType;      

class TicketTypeController extends Controller
{
    public function index()
    {
        return response()->json(TicketType::all());
    }
}
