export function mutateSetData(state, payload) {
    state.data = payload
}

export function mutateSetQuery(state, payload) {
    state.query = payload
}

export function mutateSetFormField(state, payload) {
    state.form.fields[payload.field] = payload.value
}

export function mutateSetErrors(state, payload) {
    const errors = payload.errors
        ? typeof payload.errors.errors === 'undefined'
            ? payload.errors
            : payload.errors.errors
        : {}

    state.form.errors.record(errors)
}

export function mutateFormData(state, payload) {
    _.each(payload, function(value, key) {
        state.form.fields[key] = value
    })
}

export function mutateSetPerPage(state, payload) {
    state.data.links.pagination.per_page = payload
}

export function mutateSetSelected(state, payload) {
    state.selected = payload
}

export function mutateSetService(state, payload) {
    state.service = payload
}