<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TicketStatus;      

class TicketStatusController extends Controller
{
    public function index()
    {
        return response()->json(TicketStatus::all());
    }
}
