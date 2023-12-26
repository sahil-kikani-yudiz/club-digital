import { getFormById } from '@/query/form/form.quey'
import { getToolList } from '@/query/toolbar/toolbar.query'
import { FormEditor } from '@/shared/Components/formEdior'

async function fetchData() {
  const toolList = await getToolList()

  return toolList
}

export default async function Builder(props: any) {
  const toolList: any = await fetchData()

  return (
    <>
      <FormEditor id={props?.params?.id} toolList={toolList?.data?.data} />
    </>
  )
}
