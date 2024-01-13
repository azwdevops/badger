<?php

namespace App\Exceptions;

use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler {
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register() {
        $this->renderable(function (NotFoundHttpException $e, $request) {
            if ($request->is('api/*')) {
                return response()->json([
                    'error' => [
                        'message' => 'Resource not found',
                        'type' => 'NotFoundHttpException',
                        'code' => '4405',
                        'link' => 'example.com/link',
                        'status_code' => (string)$e->getStatusCode(),
                    ]
                ], 404);
            }
        });
    }
    // public function render($request, Throwable $exception) {
    //     if ($exception instanceof AuthenticationException && $request->expectsJson()) {
    //         return response()->json(['message' => 'Unauthenticated.'], 401);
    //     }

    //     return parent::render($request, $exception);
    // }
}
