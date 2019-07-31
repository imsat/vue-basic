<?php
/**
 * Created by PhpStorm.
 * User: SAT
 * Date: 7/17/2019
 * Time: 7:03 PM
 */
namespace App\Traits;

trait ApiResponser
{
    private function successResponse($data, $code){
        return response()->json($data, $code);
    }
    protected function errorResponse($message, $code)
    {
        return response()->json(['errors' => $message, 'code' => $code], $code);
    }
}
