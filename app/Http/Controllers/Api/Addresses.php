<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\Addresses as AddressesRepository;
use App\Data\Repositories\SubEvents as SubEventsRepository;
use App\Http\Requests\AddressStore;
use App\Http\Requests\AddressUpdate;
use Illuminate\Http\Request;

class Addresses extends Controller
{
    /**
     * Get all data
     *
     * @return array
     */
    public function all()
    {
        return app(AddressesRepository::class)->all();
    }

    /**
     * Store
     *
     * @param AddressStore $request
     * @return mixed
     */
    public function store(AddressStore $request)
    {
        return app(AddressesRepository::class)->storeFromArray($request->all());
    }

    /**
     * @param AddressUpdate $request
     * @param $id
     * @return mixed
     */
    public function update(AddressUpdate $request, $id)
    {
        return app(AddressesRepository::class)->update($id, $request->all());
    }

    /**
     * Get all data
     *
     * @return array
     */
    public function availableAddresses()
    {
        return app(AddressesRepository::class)->getAvailableAddresses();
    }
}
