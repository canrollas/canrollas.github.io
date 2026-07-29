'use client';

export default function Home() {
  return (
    <div className="bg-white text-slate-900 font-[family-name:var(--font-inter)]">

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <h1 className="text-4xl font-semibold tracking-tight font-[family-name:var(--font-lora)]">
            Can Rollas
          </h1>
          <p className="mt-1 text-base text-slate-600">
            M.Sc. Researcher, Computer Vision
          </p>
          <p className="mt-0.5 text-sm text-slate-500">
            Izmir Institute of Technology (IZTECH) &nbsp;|&nbsp; İzmir, Türkiye
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <a href="mailto:canrollas@gmail.com" className="text-slate-600 hover:text-slate-900 underline underline-offset-2">
              canrollas@gmail.com
            </a>
            <a href="https://github.com/canrollas" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900 underline underline-offset-2">
              github.com/canrollas
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col lg:flex-row gap-10">
        <aside className="lg:w-56 shrink-0 space-y-8 text-sm">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Research Interests</h2>
            <ul className="space-y-1 text-slate-700 leading-snug">
              <li>Image Segmentation</li>
              <li>Generative Models</li>
              <li>Medical Imaging</li>
              <li>Domain Generalization</li>
              <li>Data-Scarce Learning</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Languages</h2>
            <ul className="space-y-1 text-slate-700">
              <li>Turkish <span className="text-slate-400">— Native</span></li>
              <li>English <span className="text-slate-400">— Fluent</span></li>
              <li>German <span className="text-slate-400">— Intermediate</span></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Links</h2>
            <ul className="space-y-1">
              <li><a href="https://github.com/canrollas" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900 underline underline-offset-2">GitHub</a></li>
              <li><a href="https://cvrg-iyte.github.io/members/current-members" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900 underline underline-offset-2">CVRG</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Contact</h2>
            <a href="mailto:canrollas@gmail.com" className="text-slate-600 hover:text-slate-900 underline underline-offset-2 break-all">
              canrollas@gmail.com
            </a>
          </div>
        </aside>

        <main className="flex-1 min-w-0 space-y-10 text-sm leading-relaxed">
          <section id="about">
            <p className="text-slate-700">
              I am an M.Sc. researcher in Computer Engineering at IZTECH, supervised by Prof. Dr. Yalın Baştanlar.
              My thesis focuses on AI-supported wound analysis using 2D and 3D computer vision. My work centers on
              image segmentation and generative methods for data-scarce medical imaging, with emphasis on
              generalization across domains and annotation regimes.
            </p>
          </section>

          <section id="education">
            <SectionTitle>Education</SectionTitle>
            <div className="space-y-5 mt-3">
              <div className="flex justify-between gap-6">
                <div>
                  <div className="font-medium">Izmir Institute of Technology (IZTECH)</div>
                  <div className="text-slate-600 italic">M.Sc. Computer Engineering — Computer Vision</div>
                  <ul className="mt-1 list-disc list-inside text-slate-500 space-y-0.5 pl-1">
                    <li>Thesis: <em>AI-Supported Wound Analysis Using 2D and 3D Computer Vision</em></li>
                    <li>Advisor: Prof. Dr. Yalın Baştanlar</li>
                    <li>Medium of instruction: English</li>
                  </ul>
                </div>
                <div className="text-slate-400 whitespace-nowrap text-right">Jul. 2024 – Present<br /><span className="text-xs">İzmir, Türkiye</span></div>
              </div>
              <div className="flex justify-between gap-6">
                <div>
                  <div className="font-medium">Izmir Institute of Technology (IZTECH)</div>
                  <div className="text-slate-600 italic">B.Sc. Computer Engineering</div>
                  <ul className="mt-1 list-disc list-inside text-slate-500 space-y-0.5 pl-1">
                    <li>Includes a one-year English preparatory program; completed while working in industry from 2021 onward</li>
                    <li>Medium of instruction: English</li>
                    <li>Thesis: <em>Remote Tracking of Agricultural Fields</em></li>
                  </ul>
                </div>
                <div className="text-slate-400 whitespace-nowrap text-right">Jan. 2018 – Jun. 2024<br /><span className="text-xs">İzmir, Türkiye</span></div>
              </div>
            </div>
          </section>

          <section id="research-experience">
            <SectionTitle>Research Experience</SectionTitle>
            <div className="space-y-5 mt-3">
              <div className="flex justify-between gap-6">
                <div>
                  <div className="font-medium">Graduate Researcher</div>
                  <div className="text-slate-600 italic">Computer Vision Research Group (CVRG), IZTECH</div>
                  <ul className="mt-1 list-disc list-inside text-slate-500 space-y-0.5 pl-1">
                    <li>Designed and conducted a systematic wound tissue segmentation benchmark (37 encoder–decoder configurations) forming the basis of an under-review publication.</li>
                  </ul>
                </div>
                <div className="text-slate-400 whitespace-nowrap text-right">Jul. 2024 – Present<br /><span className="text-xs">İzmir, Türkiye</span></div>
              </div>

              <div className="flex justify-between gap-6">
                <div>
                  <div className="font-medium">Undergraduate Researcher (B.Sc. Thesis)</div>
                  <div className="text-slate-600 italic">IZTECH, Computer Engineering</div>
                  <ul className="mt-1 list-disc list-inside text-slate-500 space-y-0.5 pl-1">
                    <li>Developed a satellite-based NDVI pipeline for longitudinal agricultural field monitoring with IoT climate station and weather integration.</li>
                    <li>Applied deep-learning-based plant disease detection on field imagery.</li>
                  </ul>
                </div>
                <div className="text-slate-400 whitespace-nowrap text-right">Jan. 2023 – Jun. 2024<br /><span className="text-xs">İzmir, Türkiye</span></div>
              </div>
            </div>
          </section>

          <section id="industry-experience">
            <SectionTitle>Industry Experience</SectionTitle>
            <div className="space-y-5 mt-3">
              <div className="flex justify-between gap-6">
                <div>
                  <div className="font-medium">Machine Learning Engineer</div>
                  <div className="text-slate-600 italic">Amatis</div>
                  <ul className="mt-1 list-disc list-inside text-slate-500 space-y-0.5 pl-1">
                    <li>Designed and deployed deep learning models for melanoma segmentation, wound segmentation, and ECG signal classification on Azure.</li>
                    <li>Built a clinical decision-support chatbot integrating patient data retrieval with a large language model backend.</li>
                  </ul>
                </div>
                <div className="text-slate-400 whitespace-nowrap text-right">Aug. 2025 – May 2026<br /><span className="text-xs">İzmir, Türkiye</span></div>
              </div>

              <div className="flex justify-between gap-6">
                <div>
                  <div className="font-medium">Software Developer</div>
                  <div className="text-slate-600 italic">Sovrox – MLBNova (Farmavil)</div>
                  <ul className="mt-1 list-disc list-inside text-slate-500 space-y-0.5 pl-1">
                    <li>Implemented satellite-based NDVI analytics and AI-driven plant disease detection within a cross-platform mobile application.</li>
                    <li>Integrated an LLM-powered agricultural Q&amp;A system and maintained cloud backend infrastructure on AWS.</li>
                  </ul>
                </div>
                <div className="text-slate-400 whitespace-nowrap text-right">Jun. 2022 – Jun. 2025<br /><span className="text-xs">İzmir, Türkiye</span></div>
              </div>

              <div className="flex justify-between gap-6">
                <div>
                  <div className="font-medium">Software Developer (part-time)</div>
                  <div className="text-slate-600 italic">Somera</div>
                  <ul className="mt-1 list-disc list-inside text-slate-500 space-y-0.5 pl-1">
                    <li>Built Scrapy-based web crawlers for automated Turkish news collection and deduplication; developed supporting NLP pipelines for text classification and summarization.</li>
                  </ul>
                </div>
                <div className="text-slate-400 whitespace-nowrap text-right">Jun. 2021 – Jul. 2022<br /><span className="text-xs">İzmir, Türkiye</span></div>
              </div>
            </div>
          </section>

          <section id="publications">
            <SectionTitle>Publications &amp; Preprints</SectionTitle>
            <ol className="mt-3 space-y-4 list-decimal list-outside pl-5 text-slate-700">
              <li>
                <span className="font-medium">Intra-Wound Tissue Segmentation: A Systematic Comparative Study.</span>{' '}
                <u>Rollas, C.</u>, Baştanlar, Y. <em>Accepted from MEDFMB Workshop, ECCV</em>, 2026.
                <div className="mt-1 text-xs text-slate-500">
                  Systematic benchmark of 37 configurations spanning 9 decoder architectures and 11 encoder backbones on a clinical dataset of 539 annotated wound images; Mix Transformer encoders consistently outperformed CNN families.
                </div>
              </li>
              <li>
                <span className="font-medium">Development of an Open-Source Terminal-Based Analog Circuit Simulator.</span>{' '}
                Kersü, A., <u>Rollas, C.</u>, Salman, Z.D., Salam, A., Gumus, A. <em>International Conference on Studies in Engineering, Science, and Technology</em>, 2023.{' '}
                <a href="https://www.researchgate.net/profile/Kittipong-Tripetch-3/publication/380466780_Experimentation_and_Analysis_of_A_Multistage_Fullbridge_Regulator/links/663df7df08aa54017af19f4f/Experimentation-and-Analysis-of-A-Multistage-Fullbridge-Regulator.pdf#page=184" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 underline underline-offset-2 text-xs">[PDF]</a>
                <div className="mt-1 text-xs text-slate-500">
                  Developed a lightweight open-source circuit simulator for passive components, validated against LTSpice.
                </div>
              </li>
            </ol>
          </section>

          <section id="projects">
            <SectionTitle>Selected Projects</SectionTitle>
            <div className="mt-3 space-y-4">
              <ProjectRow
                title="ML-Assisted Melanoma Diagnosis System"
                tags="EfficientNet · Grad-CAM · PyTorch"
                year="2024"
                href="https://github.com/canrollas/ML-Based-Melanoma-Diagnosis-System"
              >
                Fine-tuned EfficientNet-B0 on the ISIC dataset (~11k images), reached F1 score of 0.86 on the test set, and integrated Grad-CAM for clinical interpretability.
              </ProjectRow>
              <ProjectRow
                title="Mitochondria Segmentation with U-Net"
                tags="U-Net · Keras"
                year="2024"
                href="https://github.com/canrollas/mitochondria_segmentation_unet"
              >
                Binary semantic segmentation pipeline for electron microscopy images with mean IoU around 0.75.
              </ProjectRow>
            </div>
          </section>

          <section id="skills">
            <SectionTitle>Technical Skills</SectionTitle>
            <div className="mt-3 space-y-1.5 text-slate-700">
              <SkillRow label="Languages">Python, C, C++, SQL, Bash/Shell, JavaScript</SkillRow>
              <SkillRow label="ML / DL">PyTorch, TensorFlow/Keras, Scikit-learn, Hugging Face Transformers, Diffusers</SkillRow>
              <SkillRow label="Computer Vision">Image Segmentation, Object Detection, Generative Models (GANs, Diffusion), OpenCV</SkillRow>
              <SkillRow label="Infrastructure">AWS (Lambda, S3, API Gateway), Azure, Docker, Linux</SkillRow>
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
          <a href={href} target="_blank" rel="noreferrer" className="font-medium text-slate-800 hover:underline underline-offset-2">
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
