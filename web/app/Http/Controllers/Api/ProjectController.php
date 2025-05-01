<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Muestra con todos los proyectos
     */
    public function index()
    {
        return response()->json(Project::all());
    }

    /**
     * Guarda un nuevo proyecto
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name'        => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $project = Project::create($data);

        return response()->json($project, 201);
    }

    /**
     * Muestra el proyecto especificado (ID)
     */
    public function show(Project $project)
    {
        return response()->json($project);
    }

    /**
     * Actualiza el proyecto especificado (ID)
     */
    public function update(Request $request, Project $project)
    {
        $data = $request->validate([
            'name'        => 'sometimes|required|string|max:255',
            'description' => 'sometimes|nullable|string',
        ]);

        $project->update($data);

        return response()->json($project);
    }

    /**
     * Elimina el proyecto especificado (ID)
     */
    public function destroy(Project $project)
    {
        $project->delete();

        return response()->json(null, 204);
    }
}
