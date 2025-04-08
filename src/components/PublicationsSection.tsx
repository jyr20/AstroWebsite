import React from 'react'
import { publications } from '@/lib/data'
import { ScrollText } from 'lucide-react'
import MotionWrapper from './MotionWrapper'
import { GlassCard } from './ui/glass-card'
import { motion } from 'framer-motion'

export default function PublicationsSection() {
  return (
    <section
      id="publications"
      className="py-12 bg-gradient-to-b from-background to-muted/10 scroll-mt-12"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            📚 Publications
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {publications.map((publication, index) => (
            <MotionWrapper
              key={publication.name + publication.date}
              delay={index * 0.1}
            >
              <GlassCard className="p-4 dark:border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center mb-2">
                  <motion.div
                    whileHover={{ rotate: 20 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                    className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-green-500 rounded-full p-1.5 mr-2"
                  >
                    <ScrollText className="h-4 w-4 text-white" />
                  </motion.div>
                  <h3 className="font-medium">{publication.name}</h3>
                </div>
                <div className="flex flex-col space-y-2 mt-auto">
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs text-muted-foreground mb-1 ml-2">
                      ✍️ {publication.authors}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 mt-auto">
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs text-muted-foreground mb-1 ml-2">
                      🔬
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {publication.journal}
                      </a>
                    </p>
                    <span className="text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded-md">
                      📅 {publication.date}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
