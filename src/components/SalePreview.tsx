import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { saleWorks } from '@/lib/saleImages';

export default function SalePreview() {
  const preview = saleWorks.slice(0, 3);

  return (
    <section className="px-4 md:px-12 py-16 md:py-24">
      <Link to="/works-for-sale" className="no-underline">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileHover={{ color: 'hsl(340, 82%, 56%)' }}
          className="cursor-pointer transition-colors duration-300 mb-8 md:mb-12"
          style={{
            fontSize: 'clamp(0.7rem, 1.2vw, 1rem)',
            letterSpacing: '0.5em',
            fontWeight: 300,
            color: 'hsl(var(--gallery-text-dim))',
          }}
        >
          WORKS FOR SALE
        </motion.p>
      </Link>

      <div
        className="grid gap-4 md:gap-6"
        style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
      >
        {preview.map((work, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Link to="/works-for-sale" className="no-underline block group">
              <div className="overflow-hidden" style={{ aspectRatio: '1', borderRadius: 2 }}>
                <img
                  src={work.src}
                  alt={work.title}
                  className="w-full h-full object-cover block transition-all duration-500 group-hover:scale-105"
                  style={{ filter: 'brightness(0.7)' }}
                  onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.filter = 'brightness(0.7)'; }}
                />
              </div>
              <div className="mt-3" style={{ color: 'hsl(var(--gallery-text-faint))' }}>
                <p className="m-0" style={{ fontSize: 'clamp(0.55rem, 0.9vw, 0.75rem)', letterSpacing: '0.15em' }}>
                  {work.size}
                </p>
                <p className="m-0 mt-1" style={{ fontSize: 'clamp(0.55rem, 0.9vw, 0.75rem)', letterSpacing: '0.15em', color: 'hsl(var(--gallery-text-dim))' }}>
                  {work.price}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
