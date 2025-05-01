<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Ticket;          // ← Importar modelo Ticket
use Illuminate\Http\Request;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Devuelve todos los tickets (con sus relaciones opcionales)
        return response()->json(
            Ticket::with(['project','type','priority','status'])->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'project_id'         => 'required|exists:projects,id',
            'user_id'            => 'required|exists:users,id',
            'ticket_type_id'     => 'nullable|exists:ticket_types,id',
            'ticket_priority_id' => 'nullable|exists:ticket_priorities,id',
            'ticket_status_id'   => 'nullable|exists:ticket_statuses,id',
            'title'              => 'required|string|max:150',
            'description'        => 'nullable|string',
        ]);

        $ticket = Ticket::create($data);

        // OJO: aquí devolvemos status 201
        return response()->json(
            $ticket->load(['project','type','priority','status']),
            201
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(Ticket $ticket)
    {
        return response()->json(
            $ticket->load(['project','type','priority','status'])
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ticket $ticket)
    {
        $data = $request->validate([
            'project_id'         => 'sometimes|required|exists:projects,id',
            'user_id'            => 'sometimes|required|exists:users,id',
            'ticket_type_id'     => 'nullable|exists:ticket_types,id',
            'ticket_priority_id' => 'nullable|exists:ticket_priorities,id',
            'ticket_status_id'   => 'nullable|exists:ticket_statuses,id',
            'title'              => 'sometimes|required|string|max:150',
            'description'        => 'nullable|string',
        ]);
    
        $ticket->update($data);
    
        return response()->json(
            $ticket->load(['project','type','priority','status'])
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ticket $ticket)
    {
        $ticket->delete();
        return response()->json(null, 204);
    }
}
