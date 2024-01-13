<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ArticleCollection extends ResourceCollection {
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array {
        return [
            'data' => $this->collection,
        ];
    }
    public function with($request){
        return [
            'status' => 'success'
        ];
    }
    public function withResponse($request, $response){
        $response->header('Accept', 'application/json');
    }
}
