<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Gate;

class InstitutionUpdate extends Request
{
    /**
     * @return bool
     */
    public function authorize()
    {
        return Gate::allows('institutions:modify');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'party_number' => 'numeric',
        ];
    }
}
