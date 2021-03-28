import Banner from "../Banner/Banner"

export default function TestError({ error }) {
  return <Banner type='error'>{ error.message }</Banner>
}
