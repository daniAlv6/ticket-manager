<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TicketPriority extends Model
{
    use HasFactory;

    protected $fiullable = [
        'name'
    ];

    public function tickets(){
        return $this -> hasMany(Ticket::class);
    }
}
