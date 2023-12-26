import ShareForm from '@/shared/Components/shareForm'

export default async function Preview(props: any) {
  return <ShareForm id={props?.params?.id} />
}
