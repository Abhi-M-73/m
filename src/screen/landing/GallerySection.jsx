import gallery1 from '../../assets/gallery/gal1.png';
import gallery2 from '../../assets/gallery/gal2.png';
import gallery3 from '../../assets/gallery/gal3.png';
import gallery4 from '../../assets/gallery/gal4.png';


const GallerySection = () => {
  const images = [gallery1, gallery2, gallery3, gallery4];
  return (
    <div className='w-full bg-gradient-to-b from-white to-slate-50'>
    <div className='w-full max-w-7xl mx-auto py-20 '>
        <div className='grid grid-cols-2 md:grid-cols-2 gap-5 '>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index + 1}`}
              className='w-full h-auto rounded-lg shadow-sm'
            />
          ))}
      </div>
        </div>
    </div>
  )
}

export default GallerySection
