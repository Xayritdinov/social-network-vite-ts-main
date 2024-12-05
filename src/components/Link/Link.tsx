export const Link = ({className, src, alt}: any) => {
  return (
    <>
        <a className={className} href="#">
            <img src={src} alt={alt} />
          </a>         
    </>
  )
}
