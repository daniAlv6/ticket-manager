<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TicketStatus extends Model
{
    protected $fillable = [
        'name',
    ];

    /**
     * Un estado puede aplicarse a muchos tickets.
     */
    public function tickets(): HasMany
    {
        return $this->hasMany(Ticket::class);
    }
}
