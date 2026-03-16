import {
  Image,
  BoxSelect,
  FileText,
  MessageSquare,
  Mic,
  Shield,
  Tag,
  Layers,
} from 'lucide-react'
import { AnimateOnScroll } from './animate-on-scroll'

const tasks = [
  {
    icon: Image,
    title: 'Image Classification',
    description: 'Categorize images into predefined classes at scale.',
  },
  {
    icon: BoxSelect,
    title: 'Object Detection',
    description: 'Draw bounding boxes around objects in images and video frames.',
  },
  {
    icon: FileText,
    title: 'Text Classification',
    description: 'Classify documents, reviews, or any text into categories.',
  },
  {
    icon: MessageSquare,
    title: 'Sentiment Analysis',
    description: 'Determine tone and sentiment across customer feedback and reviews.',
  },
  {
    icon: Mic,
    title: 'Audio Transcription',
    description: 'Transcribe audio clips with speaker identification and timestamps.',
  },
  {
    icon: Shield,
    title: 'Content Moderation',
    description: 'Flag inappropriate or policy-violating content across media types.',
  },
  {
    icon: Tag,
    title: 'Named Entity Recognition',
    description: 'Identify and tag entities — people, places, organizations — in text.',
  },
  {
    icon: Layers,
    title: 'Semantic Segmentation',
    description: 'Pixel-level annotation for detailed image understanding.',
  },
]

export function TaskTypes() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="mb-14 lg:mb-20">
            <span className="text-[11px] font-mono tracking-widest uppercase text-primary mb-3 block">
              Task Types
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              Any data, any annotation
            </h2>
            <p className="text-muted-foreground max-w-lg text-sm leading-relaxed">
              From simple classification to complex segmentation — our labelers
              handle every annotation type your ML pipeline needs.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tasks.map((task, i) => (
            <AnimateOnScroll key={task.title} delay={i * 0.06}>
              <div className="group p-5 border border-border/40 rounded-[var(--radius)] bg-card/30 hover:border-primary/30 hover:bg-primary/[0.04] transition-colors h-full">
                <task.icon
                  size={20}
                  className="text-muted-foreground group-hover:text-primary transition-colors mb-4"
                />
                <h3 className="text-sm font-bold mb-1.5">{task.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {task.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
