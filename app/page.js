'use client';

export default function Home() {
  return (
    <div className="bg-white text-slate-900 font-[family-name:var(--font-inter)]">

      {/* ── Top Header ── */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <h1 className="text-4xl font-semibold tracking-tight font-[family-name:var(--font-lora)]">
            Can Rollas
          </h1>
          <p className="mt-1 text-base text-slate-600">
            MSc Researcher, Computer Vision
          </p>
          <p className="mt-0.5 text-sm text-slate-500">
            Izmir Institute of Technology (IZTECH) &nbsp;|&nbsp; İzmir, Türkiye
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <a href="mailto:canrollas@gmail.com" className="text-slate-600 hover:text-slate-900 underline underline-offset-2">
              canrollas@gmail.com
            </a>
            <a href="https://github.com/canrollas" target="_blank" className="text-slate-600 hover:text-slate-900 underline underline-offset-2">
              github.com/canrollas
            </a>
          </div>
        </div>
      </header>

      {/* ── Body: sidebar + main ── */}
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col lg:flex-row gap-10">

        {/* ── LEFT SIDEBAR ── */}
        <aside className="lg:w-56 shrink-0 space-y-8 text-sm">

          {/* Research Interests */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Research Interests</h2>
            <ul className="space-y-1 text-slate-700 leading-snug">
              <li>Generative Models</li>
              <li>Latent Diffusion &amp; ControlNet</li>
              <li>Medical Image Synthesis</li>
              <li>Semantic Segmentation</li>
              <li>Object Detection</li>
              <li>LLM Integration</li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Languages</h2>
            <ul className="space-y-1 text-slate-700">
              <li>Turkish <span className="text-slate-400">— Native</span></li>
              <li>English <span className="text-slate-400">— B2</span></li>
              <li>German <span className="text-slate-400">— B1</span></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Links</h2>
            <ul className="space-y-1">
              <li><a href="https://github.com/canrollas" target="_blank" className="text-slate-600 hover:text-slate-900 underline underline-offset-2">GitHub</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Contact</h2>
            <a href="mailto:canrollas@gmail.com" className="text-slate-600 hover:text-slate-900 underline underline-offset-2 break-all">
              canrollas@gmail.com
            </a>
          </div>

        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="flex-1 min-w-0 space-y-10 text-sm leading-relaxed">

          {/* About */}
          <section id="about">
            <p className="text-slate-700">
              I am currently pursuing an MSc in Computer Science at IZTECH under the supervision of
              Prof. Dr. Yalın Baştanlar, with my thesis focusing on AI-assisted diabetic and surgical wound analysis. Previously, I worked as a Machine Learning Engineer at Amatis,
              developing deep learning models for medical imaging (melanoma &amp; wound detection, ECG signal analysis)
              and deploying backend services on Azure. My research and engineering work spans generative models,
              semantic segmentation, object detection, NLP, and cloud architecture.
            </p>
          </section>

          {/* Education */}
          <section id="education">
            <SectionTitle>Education</SectionTitle>
            <div className="space-y-5 mt-3">
              <div className="flex justify-between gap-6">
                <div>
                  <div className="font-medium">Izmir Institute of Technology (IZTECH)</div>
                  <div className="text-slate-600 italic">M.Sc. Computer Science — Computer Vision</div>
                  <ul className="mt-1 list-disc list-inside text-slate-500 space-y-0.5 pl-1">
                    <li>Thesis: <em>AI-Assisted Diabetic and Surgical Wound Analysis</em></li>
                    <li>Advisor: Prof. Dr. Yalın Baştanlar</li>
                    <li>GPA: 3.08 / 4.0</li>
                  </ul>
                </div>
                <div className="text-slate-400 whitespace-nowrap text-right">Jul. 2024 – Present<br /><span className="text-xs">İzmir, Türkiye</span></div>
              </div>
              <div className="flex justify-between gap-6">
                <div>
                  <div className="font-medium">Izmir Institute of Technology (IZTECH)</div>
                  <div className="text-slate-600 italic">B.Sc. Computer Engineering</div>
                  <ul className="mt-1 list-disc list-inside text-slate-500 space-y-0.5 pl-1">
                    <li>Thesis: <em>"Remote Tracking of Agricultural Fields"</em></li>
                    <li>GPA: 3.0 / 4.0</li>
                  </ul>
                </div>
                <div className="text-slate-400 whitespace-nowrap text-right">Jan. 2018 – Jun. 2024<br /><span className="text-xs">İzmir, Türkiye</span></div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section id="experience">
            <SectionTitle>Work Experience</SectionTitle>
            <div className="space-y-5 mt-3">
              <div className="flex justify-between gap-6">
                <div>
                  <div className="font-medium">Machine Learning Engineer</div>
                  <div className="text-slate-600 italic">Amatis</div>
                  <ul className="mt-1 list-disc list-inside text-slate-500 space-y-0.5 pl-1">
                    <li>Developed deep learning models for melanoma and wound detection (segmentation &amp; classification) and ECG signal analysis</li>
                    <li>Built a medical chatbot capable of processing patient data to assist clinicians with information retrieval</li>
                    <li>Deployed models and backend services on Azure</li>
                  </ul>
                </div>
                <div className="text-slate-400 whitespace-nowrap text-right">Aug. 2025 – May 2026<br /><span className="text-xs">İzmir, Türkiye</span></div>
              </div>
              <div className="flex justify-between gap-6">
                <div>
                  <div className="font-medium">Software Developer</div>
                  <div className="text-slate-600 italic">Sovrox – MLBNova (Farmavil)</div>
                  <ul className="mt-1 list-disc list-inside text-slate-500 space-y-0.5 pl-1">
                    <li>Developed a remote field tracking application with satellite-based NDVI analytics, real-time weather integration, and AI-powered plant disease detection</li>
                    <li>Built and maintained AWS-based backend infrastructure (Lambda, API Gateway, S3) and a cross-platform React Native mobile app</li>
                    <li>Integrated an LLM-based chatbot for agricultural Q&amp;A within the platform</li>
                  </ul>
                </div>
                <div className="text-slate-400 whitespace-nowrap text-right">Jun. 2022 – Jun. 2025<br /><span className="text-xs">İzmir, Türkiye</span></div>
              </div>
              <div className="flex justify-between gap-6">
                <div>
                  <div className="font-medium">Software Developer</div>
                  <div className="text-slate-600 italic">Somera</div>
                  <ul className="mt-1 list-disc list-inside text-slate-500 space-y-0.5 pl-1">
                    <li>Wrote Scrapy-based web crawlers for automated Turkish news collection and deduplication at scale</li>
                    <li>Built NLP pipelines (BERT) for news classification, sentiment analysis, and summarization for enterprise clients</li>
                  </ul>
                </div>
                <div className="text-slate-400 whitespace-nowrap text-right">Jun. 2021 – Jul. 2022<br /><span className="text-xs">İzmir, Türkiye</span></div>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section id="publications">
            <SectionTitle>Publications</SectionTitle>
            <ol className="mt-3 space-y-4 list-decimal list-outside pl-5 text-slate-700">
              <li>
                <span className="font-medium">Mask2Derm: Mask-Conditioned Dermoscopic Image Synthesis via Latent Diffusion.</span>{" "}
                <u>Rollas, C.</u>, Güllü, M.K., Alıcı, İ.O. <em>Elsevier – Preprint</em>, 2026.{" "}
                <span className="inline-block px-1.5 py-0.5 text-xs rounded bg-slate-100 border text-slate-500 align-middle">Preprint</span>
                <div className="mt-1 text-xs text-slate-500">
                  ControlNet-based latent diffusion model conditioned on lesion masks; Dice: 0.92, IoU: 0.87.
                  TSTR benchmark: synthetic-trained model outperformed ImageNet baseline by 13.4% IoU (0.93 vs 0.79).
                </div>
              </li>
              <li>
                <span className="font-medium">Development of Open Source Terminal-Based Analog Circuit Simulator.</span>{" "}
                Kersü, A., <u>Rollas, C.</u>, Salman, Z.D., Salam, A., Gumus, A.{" "}
                <em>International Conference on Studies in Engineering, Science, and Technology</em>, 2023.{" "}
                <a href="https://github.com/miralab-ai/circuit-simulator" target="_blank" className="text-slate-500 hover:text-slate-900 underline underline-offset-2 text-xs">[GitHub]</a>
                <div className="mt-1 text-xs text-slate-500">
                  Lightweight open-source circuit simulator for passive components validated against LTSpice.
                </div>
              </li>
            </ol>
          </section>

          {/* Projects */}
          <section id="projects">
            <SectionTitle>Selected Projects</SectionTitle>
            <div className="mt-3 space-y-4">
              <ProjectRow
                title="Mask2Derm"
                tags="Diffusion Models · ControlNet · PyTorch"
                year="2025"
                href="https://github.com/canrollas/Mask2DermRepo"
              >
                Initial implementation repository for the Mask2Derm article. ControlNet-based latent diffusion model conditioned on lesion masks for dermoscopic image synthesis.
              </ProjectRow>
              <ProjectRow
                title="BerryRoll"
                tags="Python · Agents · LLM"
                year="2025"
                href="https://github.com/canrollas/BerryRoll"
              >
                Data-driven discovery agent for hypothesis testing.
              </ProjectRow>
              <ProjectRow
                title="AI-Assisted Diabetic and Surgical Wound Analysis"
                tags="Python · Segmentation"
                year="2025"
                href="https://github.com/canrollas/SoreSAM"
              >
                Wound segmentation using SAM (Segment Anything Model).
              </ProjectRow>
              <ProjectRow
                title="Multi-Agent Systems — CENG 568"
                tags="Python · Multi-Agent Systems"
                year="2025"
                href="https://github.com/canrollas/mas-project"
              >
                Course project for CENG 568: Multi Agent Systems.
              </ProjectRow>
              <ProjectRow
                title="ML-Assisted Melanoma Diagnosis System"
                tags="EfficientNet · Grad-CAM · PyTorch"
                year="2024"
                href="https://github.com/canrollas/ML-Based-Melanoma-Diagnosis-System"
              >
                Fine-tuned EfficientNetB0 on ISIC dataset (~11k images); achieved 86% test accuracy (F1: 0.86).
                Integrated Grad-CAM visualizations for clinical interpretability.
              </ProjectRow>
              <ProjectRow
                title="Mitochondria Segmentation with U-Net"
                tags="U-Net · Keras"
                year="2024"
                href="https://github.com/canrollas/mitochondria_segmentation_unet"
              >
                Binary semantic segmentation of mitochondria in grayscale microscopy images; 99.4% validation accuracy, Mean IoU ≈ 0.75.
              </ProjectRow>
              <ProjectRow
                title="RollasBack – Python Backend Framework"
                tags="Python · Socket Programming"
                year="2024 – Present"
                href="https://github.com/CodeWikiOrg/RollAsBack/tree/main"
              >
                Lightweight RESTful Python framework built from scratch over raw HTTP sockets; analogous to Flask/Django at a lower abstraction level.
              </ProjectRow>
              <ProjectRow
                title="Turkish License Plate Recognition"
                tags="YOLOv5 · OCR"
                year="2023"
                href="https://github.com/canrollas/Turkish_LPR"
              >
                Real-time vehicle detection and Turkish license plate recognition system using YOLOv5 and OCR pipelines.
              </ProjectRow>
            </div>
          </section>

          {/* Skills */}
          <section id="skills">
            <SectionTitle>Technical Skills</SectionTitle>
            <div className="mt-3 space-y-1.5 text-slate-700">
              <SkillRow label="ML & Deep Learning">PyTorch, TensorFlow/Keras, Scikit-learn, Hugging Face Transformers</SkillRow>
              <SkillRow label="Computer Vision">Diffusion Models, ControlNet, Semantic Segmentation, Object Detection, Grad-CAM, YOLOv5, OpenCV</SkillRow>
              <SkillRow label="NLP & LLMs">BERT, Transformers, Sentiment Analysis, Topic Modeling, LLM Integration</SkillRow>
              <SkillRow label="Cloud & Deployment">AWS, Azure, Docker, Kubernetes</SkillRow>
            </div>
          </section>

        </main>
      </div>

      <footer className="border-t border-slate-200 mt-4 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Can Rollas
      </footer>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div className="flex items-center gap-3">
      <h2 className="text-base font-semibold font-[family-name:var(--font-lora)] whitespace-nowrap">{children}</h2>
      <div className="h-px bg-slate-200 flex-1" />
    </div>
  );
}

function ProjectRow({ title, tags, year, href, children }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <div className="flex items-baseline gap-2 flex-wrap">
          <a href={href} target="_blank" className="font-medium text-slate-800 hover:underline underline-offset-2">
            {title}
          </a>
          <span className="text-xs text-slate-400 italic">{tags}</span>
        </div>
        {year && <span className="text-xs text-slate-400 whitespace-nowrap">{year}</span>}
      </div>
      <p className="mt-0.5 text-slate-500 text-xs leading-relaxed">{children}</p>
    </div>
  );
}

function SkillRow({ label, children }) {
  return (
    <div className="flex gap-2">
      <span className="font-medium text-slate-700 whitespace-nowrap">{label}:</span>
      <span className="text-slate-500">{children}</span>
    </div>
  );
}
