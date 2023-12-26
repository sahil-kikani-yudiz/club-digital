import { useForm } from 'react-hook-form'
import CommonInput from '../ui/commonInput'
import Dropdown from '../ui/dropdown'
import RadioButton from '../ui/radioButton'
import CheckBox from '../ui/checkBox'
import { validationErrors } from '../constants/validationError'
type settingType = {
  sLabel: string
  aOptions: any
  iUniqueId: string
  sPlaceHolder: string
  bIsRequired: boolean
  nMaxLength: number
  nMinLength: number
}

type fieldTypes = {
  oSettings: settingType
  oField: any
}

type fieldMakerTypes = {
  field: fieldTypes
  register: Function
  errors: Object
  setValue?: Function
}

export default function FieldMaker({ field, register, errors, setValue }: fieldMakerTypes) {
  const minLength = field?.oSettings?.nMinLength
  const maxLength = field?.oSettings?.nMaxLength 

  return (
    <>
      {field?.oField?.oFieldType?.sType === 'select' && (
        <>
          <label className='text-secondary-500'>{field?.oSettings?.sLabel}</label>
          <Dropdown options={field?.oSettings?.aOptions} className='mt-2 ' />
        </>
      )}
      {field?.oField?.oFieldType?.sType === 'radio' && (
        <>
          <RadioButton
            register={register}
            key={field?.oSettings?.iUniqueId}
            id={field?.oSettings?.iUniqueId}
            options={field?.oSettings?.aOptions}
            label={field?.oSettings?.sLabel}
          />
        </>
      )}

      {field?.oField?.oFieldType?.sType === 'checkbox' && (
        <>
          <CheckBox
            key={field?.oSettings?.iUniqueId}
            register={register}
            options={field?.oSettings?.aOptions}
            label={field?.oSettings?.sLabel}
            id={field?.oSettings?.iUniqueId}
            setValue={setValue}
            // required={field?.oSettings?.bIsRequired}
          />
        </>
      )}
      {(field?.oField?.oFieldType?.sParentType === 'input' || field?.oField?.oFieldType?.sType === 'textarea') &&
        field?.oField?.oFieldType?.sType !== 'radio' &&
        field?.oField?.oFieldType?.sType !== 'checkbox' && (
          <>
            <CommonInput
              className='mt-4 '
              label={field?.oSettings?.sLabel}
              type={field?.oField?.oFieldType?.sType}
              register={register}
              required={field?.oSettings?.bIsRequired}
              name={`oAnswers.${field?.oSettings?.iUniqueId}`}
              placeholder={field?.oSettings?.sPlaceHolder}
              validation={{
                maxLength: { value: maxLength, message: validationErrors.maxLength(maxLength) },
                minLength: { value: minLength, message: validationErrors.maxLength(minLength) }
              }}
              errors={errors}
            />
          </>
        )}
      {/* <button type='submit' onClick={handleSubmit(onSubmit)}>
        Submit
      </button> */}
    </>
  )
}
