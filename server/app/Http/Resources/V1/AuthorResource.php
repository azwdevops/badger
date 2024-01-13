<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthorResource extends JsonResource {
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array {
        return [
            'people' => 'people',
            'id' => $this->id,
            'name' => $this->name,
            'links' => [
                'self' => route('authors', $this->id)
            ]
        ];
    }
}
