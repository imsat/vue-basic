<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'identifier' => (string)$this->id,
            'name' => $this->name,
            'mark' => $this->slug,
            'email' => $this->email,
            'isVerified' => $this->verified,
            'isAdmin' => (string)($this->admin === 'true'),
            'avatar' => $this->image,
            'creationDate' => $this->created_at,
            'lastChange' => $this->updated_at,
//            'deletedDate' => $this->deleted_at,
//            'links' => [
//                [
//                    'rel' => 'self',
//                    'href' => route('users.show', $this->slug)
//                ],
//            ]

        ];
    }
}
