<?php

namespace App\Http\Requests;

class PersonTopicUpdate extends BaseStore
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
//            'person_id' => 'required',
//            'topic_id' => 'required',
        ];
    }
}