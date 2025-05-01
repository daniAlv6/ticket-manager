<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TicketPriority;      
class TicketPriorityController extends Controller
{
    public function index()
    {
        return response()->json(TicketPriority::all());
    }
}
