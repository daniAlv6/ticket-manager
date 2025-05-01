<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TicketType extends Model
{
    protected $fillable = [
        'name',
    ];

    /**
     * Un tipo puede aplicarse a muchos tickets.
     */
    public function tickets(): HasMany
    {
        return $this->hasMany(Ticket::class);
    }
}
