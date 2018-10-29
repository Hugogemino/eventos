<?php
namespace App\Data\Repositories;

use App\Data\Models\Address as AddressModel;
use App\Data\Models\PersonInstitution as PersonInstitutionModel;

class Addresses extends Repository
{
    /**
     * @var string
     */
    protected $model = AddressModel::class;

    /**
     * @param $personInstitutionId
     * @return mixed
     */
    public function allByPersonInstitutionId($personInstitutionId)
    {
        return $this->applyFilter(
            AddressModel::where('addressable_id', $personInstitutionId)->where(
                'addressable_type',
                PersonInstitutionModel::class
            )
        );
    }

    /**
     * @param $array
     * @param $model
     * @return array
     */
    public function fillAddressableFromModel($array, $model)
    {
        return array_merge($array, [
            'addressable_id' => $model->id,
            'addressable_type' => $model->model,
        ]);
    }
}
