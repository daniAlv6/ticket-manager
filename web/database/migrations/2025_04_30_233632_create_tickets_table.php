<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')         ->constrained()->onDelete('cascade');
            $table->foreignId('user_id')            ->constrained()->onDelete('cascade');
            $table->foreignId('ticket_type_id')     ->nullable()->constrained('ticket_types')->nullOnDelete();
            $table->foreignId('ticket_priority_id') ->nullable()->constrained('ticket_priorities')->nullOnDelete();
            $table->foreignId('ticket_status_id')   ->nullable()->constrained('ticket_statuses')->nullOnDelete();
            $table->string('title',150);
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
