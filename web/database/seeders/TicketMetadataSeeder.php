<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TicketMetadataSeeder extends Seeder
{
    public function run(): void
    {
        $now = Carbon::now();

        // Tipos de ticket
        DB::table('ticket_types')->insert([
            ['name' => 'Bug',        'created_at'=>$now,'updated_at'=>$now],
            ['name' => 'Feature',    'created_at'=>$now,'updated_at'=>$now],
            ['name' => 'Task',       'created_at'=>$now,'updated_at'=>$now],
        ]);

        // Prioridades
        DB::table('ticket_priorities')->insert([
            ['name' => 'Baja',       'created_at'=>$now,'updated_at'=>$now],
            ['name' => 'Media',      'created_at'=>$now,'updated_at'=>$now],
            ['name' => 'Alta',       'created_at'=>$now,'updated_at'=>$now],
        ]);

        // Estados
        DB::table('ticket_statuses')->insert([
            ['name' => 'Abierto',    'created_at'=>$now,'updated_at'=>$now],
            ['name' => 'En progreso','created_at'=>$now,'updated_at'=>$now],
            ['name' => 'Cerrado',    'created_at'=>$now,'updated_at'=>$now],
        ]);
    }
}
