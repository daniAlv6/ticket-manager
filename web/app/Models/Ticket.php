<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ticket extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'protect_id',
        'user_id',
        'ticket_type_id',
        'ticket_priority_id',
        'ticket_status_id',
        'title',
        'description'
    ];

    public function project(){
        return $this -> belongsTo(Project::class);
    }

    public function type(){
        return $this -> belongsTo(TicketType::class, 'ticket_type_id');

    }

    public function priority(){
        return $this -> belongsTo(TicketPriority::class, 'ticket_priority_id');
        
    }

    public function status(){
        return $this -> belongsTo(TicketStatus::class, 'ticket_status_id');
        
    }
}
