$.fn.form = ()->
    this.options=
        onSubmit:()->
        onValidated:(state)->
            return state
        onFieldValid:(field)->
            $(field).removeClass "error"
            $(field).addClass "valid"
        onFieldInvalid:(field)->
            $(field).addClass "error"

    return this
