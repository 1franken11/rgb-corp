// src/components/imageComparison/imageComparisonElement.js

// Exporta la clase para que pueda ser importada en ImageComparison.astro
export class ImageComparisonElement extends HTMLElement {
  // Elimino 'private' y las anotaciones de tipo para hacer que sea JavaScript puro.
  // Los comentarios indican el tipo esperado para claridad.
  containerRef = null; // HTMLDivElement | null
  dividerRef = null;   // HTMLDivElement | null
  sliderRef = null;    // HTMLDivElement | null
  afterWrapperRef = null; // HTMLDivElement | null
  dotsContainerRef = null; // HTMLDivElement | null
  imageBeforeRef = null; // HTMLImageElement | null
  imageAfterRef = null;  // HTMLImageElement | null
  
  comparisons = [];    // { before: string; after: string; alt: string }[]
  currentIndex = 0;    // number
  userInteracting = false; // boolean
  rafId = null;        // number | null
  beforeLabel = "Before"; // string
  afterLabel = "After";   // string
  
  // Variables para almacenar los métodos bind
  handleMouseMoveBound;
  handleTouchMoveBound;
  handleMouseUpBound;
  handleTouchEndBound;
  handleMouseDownBound;
  handleTouchStartBound;
  handleDotClickBound;
  preventScrollBound;

  constructor() {
    super();
    // Inicializamos los métodos bind en el constructor
    this.handleMouseMoveBound = this.handleMouseMove.bind(this);
    this.handleTouchMoveBound = this.handleTouchMove.bind(this);
    this.handleMouseUpBound = this.handleMouseUp.bind(this);
    this.handleTouchEndBound = this.handleTouchEnd.bind(this);
    this.handleMouseDownBound = this.handleMouseDown.bind(this);
    this.handleTouchStartBound = this.handleTouchStart.bind(this);
    this.handleDotClickBound = this.handleDotClick.bind(this);
    this.preventScrollBound = this.preventScroll.bind(this);
  }
  
  connectedCallback() {
    const comparisonsData = this.dataset.comparisons;
    if (comparisonsData) {
      try {
        this.comparisons = JSON.parse(comparisonsData);
      } catch (e) {
        console.error("Error parsing comparisons data:", e);
        this.comparisons = []; // Asegura que comparisons sea un array vacío en caso de error
      }
    }
    this.beforeLabel = this.dataset.beforeLabel || "Before";
    this.afterLabel = this.dataset.afterLabel || "After";
  
    console.log("ConnectedCallback - About to render with comparisons:", this.comparisons.length);
    this.render(); // Llama a render para crear el DOM
    console.log("ConnectedCallback - Render completed");
  
    // Obtener referencias DESPUÉS de que render() haya creado los elementos
    // Es crucial usar 'this.querySelector' para buscar dentro del propio Custom Element
    this.containerRef = this.querySelector('.image-comparison-container');
    this.dividerRef = this.querySelector('.comparison-divider');
    this.sliderRef = this.querySelector('.comparison-slider');
    this.afterWrapperRef = this.querySelector('.comparison-after-wrapper');
    this.dotsContainerRef = this.querySelector('.comparison-dots');
    this.imageBeforeRef = this.querySelector('.image-before');
    this.imageAfterRef = this.querySelector('.image-after');
  
    console.log("ImageComparisonElement connected!");
    console.log("Comparisons data loaded:", this.comparisons);
    console.log("beforeLabel:", this.beforeLabel);
    console.log("afterLabel:", this.afterLabel);
    console.log("Container Ref:", this.containerRef);
    console.log("Image Before Ref:", this.imageBeforeRef);
    console.log("Image After Ref:", this.imageAfterRef);
    console.log("Dots Container Ref:", this.dotsContainerRef);

    // 4. Agregar event listeners (ahora que las referencias están disponibles)
    if (this.containerRef && this.sliderRef) {
      this.containerRef.addEventListener('mousemove', this.handleMouseMoveBound);
      this.containerRef.addEventListener('touchmove', this.handleTouchMoveBound, { passive: false });
      this.containerRef.addEventListener('mouseup', this.handleMouseUpBound);
      this.containerRef.addEventListener('touchend', this.handleTouchEndBound);
  
      this.sliderRef.addEventListener('mousedown', this.handleMouseDownBound);
      this.sliderRef.addEventListener('touchstart', this.handleTouchStartBound);
    }
  
    if (this.dotsContainerRef) {
      this.dotsContainerRef.addEventListener('click', this.handleDotClickBound);
      console.log("Dot click listener added to:", this.dotsContainerRef);
    }
  
    this.updateImageDisplay(); // Actualiza las URLs de las imágenes y centra
    
    // Ya se inicializa en updateImageDisplay, no es necesario aquí: this.moveToPercentage(50);
    
    // Añadir el listener al document, pero solo si hay interacción
    // Considera si quieres que esto sea global o solo dentro del elemento
    // Si el Custom Element es lo único interactivo, puede ser útil.
    document.addEventListener("touchmove", this.preventScrollBound, { passive: false });
  }
  
  disconnectedCallback() {
    // Remover todos los event listeners para evitar fugas de memoria
    if (this.containerRef && this.sliderRef) {
      this.containerRef.removeEventListener('mousemove', this.handleMouseMoveBound);
      this.containerRef.removeEventListener('touchmove', this.handleTouchMoveBound);
      this.containerRef.removeEventListener('mouseup', this.handleMouseUpBound);
      this.containerRef.removeEventListener('touchend', this.handleTouchEndBound);
  
      this.sliderRef.removeEventListener('mousedown', this.handleMouseDownBound);
      this.sliderRef.removeEventListener('touchstart', this.handleTouchStartBound);
    }
    if (this.dotsContainerRef) {
      this.dotsContainerRef.removeEventListener('click', this.handleDotClickBound);
    }
    document.removeEventListener("touchmove", this.preventScrollBound);
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
    }
  }
  
  optimizeUrl(url) { // Elimina la anotación ': string'
      console.log("Original URL for optimization:", url);
    if (url.includes("/upload/f_auto,q_auto/")) {
      console.log("URL already optimized:", url);
      return url;
    }
    console.log("Optimizing URL:", url);
    const optimizedUrl = url.replace("/upload/", "/upload/f_auto,q_auto/");
    console.log("Optimized URL:", optimizedUrl);
    return optimizedUrl;
  }
  
  moveToPercentage(percentage) { // Elimina la anotación ': number'
    if (!this.dividerRef || !this.sliderRef || !this.afterWrapperRef) return;
  
    this.dividerRef.style.left = `${percentage}%`;
    this.sliderRef.style.left = `${percentage}%`;
    this.afterWrapperRef.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
  }
  
  handleMove = (clientX) => { // Elimina la anotación ': number'
    if (!this.containerRef) return;
  
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
    }
  
    this.rafId = requestAnimationFrame(() => {
      if (!this.containerRef) return;
  
      const rect = this.containerRef.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      percentage = Math.max(0, Math.min(100, percentage));
  
      this.moveToPercentage(percentage);
    });
  };
  
  handleMouseDown = (e) => { // Elimina la anotación ': MouseEvent'
    this.userInteracting = true;
    this.handleMove(e.clientX);
  };
  
  handleMouseMove = (e) => { // Elimina la anotación ': MouseEvent'
    if (this.userInteracting) this.handleMove(e.clientX);
  };
  
  handleMouseUp = () => { // Elimina la anotación 'Bound' si ya lo haces en el constructor
    this.userInteracting = false;
  };
  
  handleTouchStart = (e) => { // Elimina la anotación ': TouchEvent'
    this.userInteracting = true;
    this.handleMove(e.touches[0].clientX);
  };
  
  handleTouchMove = (e) => { // Elimina la anotación ': TouchEvent'
    if (this.userInteracting) this.handleMove(e.touches[0].clientX);
  };
  
  handleTouchEnd = () => { // Elimina la anotación 'Bound'
    this.userInteracting = false;
  };
  
  preventScroll = (e) => { // Elimina la anotación ': TouchEvent'
    if (this.userInteracting) e.preventDefault();
  };
  
  updateImageDisplay() {
      // Siempre obtener las referencias actualizadas
      this.imageBeforeRef = this.querySelector('.image-before');
      this.imageAfterRef = this.querySelector('.image-after');
      if (!this.imageBeforeRef || !this.imageAfterRef || this.comparisons.length === 0) {
          console.warn("updateImageDisplay: Missing image refs or no comparisons data.");
          return;
      }

      const currentComparison = this.comparisons[this.currentIndex];
      const beforeSrc = this.optimizeUrl(currentComparison.before);
      const afterSrc = this.optimizeUrl(currentComparison.after);

      this.imageBeforeRef.src = beforeSrc;
      this.imageBeforeRef.alt = `${currentComparison.alt} - ${this.beforeLabel}`;
      this.imageAfterRef.src = afterSrc;
      this.imageAfterRef.alt = `${currentComparison.alt} - ${this.afterLabel}`;

      requestAnimationFrame(() => {
          this.moveToPercentage(50);
      });
  }
  
  handleDotClick = (e) => { // Elimina la anotación ': Event'
    const target = e.target; // No necesitas 'as HTMLElement'
    if (target.classList.contains('dot')) {
      const index = parseInt(target.dataset.index || '0', 10);
      if (index !== this.currentIndex) {
        this.currentIndex = index;
        this.updateImageDisplay();
        this.updateDotsActiveState();
      }
    }
  };
  
  updateDotsActiveState() {
    if (this.dotsContainerRef) {
      this.dotsContainerRef.querySelectorAll('.dot').forEach((dot, idx) => {
        if (idx === this.currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  }
  
  // Método para renderizar el contenido interno del Custom Element
  render() {
    console.log("Render method called with comparisons:", this.comparisons.length);
    const current = this.comparisons[this.currentIndex] || { before: '', after: '', alt: '' };
    
    const dotsHTML = this.comparisons.length > 1
      ? this.comparisons.map((_, i) => `
          <span
            class="dot ${i === this.currentIndex ? "active" : ""}"
            data-index="${i}"
            aria-label="Go to comparison ${i + 1}"
            tabindex="0"
          ></span>
        `).join('')
      : '';
    
    this.innerHTML = `
      <div class="image-comparison-container">
        <img
          src="${this.optimizeUrl(current.before)}"
          alt="${current.alt} - ${this.beforeLabel}"
          class="image-before"
          loading="lazy"
        />
  
        <div
          class="comparison-after-wrapper"
          style="clip-path: inset(0 50% 0 0);"
        >
          <img
            src="${this.optimizeUrl(current.after)}"
            alt="${current.alt} - ${this.afterLabel}"
            class="image-after"
            loading="lazy"
          />
        </div>
  
        <div class="comparison-divider" style="left: 50%;"></div>
        <div
          class="comparison-slider"
          style="left: 50%;"
        >
          <div class="slider-arrow left-arrow"></div>
          <div class="slider-arrow right-arrow"></div>
        </div>
      </div>
      <div class="comparison-dots">
        ${dotsHTML}
      </div>
    `;
    
    // Volver a agregar el event listener para los dots internos
    this.dotsContainerRef = this.querySelector('.comparison-dots');
    if (this.dotsContainerRef) {
      this.dotsContainerRef.removeEventListener('click', this.handleDotClickBound);
      this.dotsContainerRef.addEventListener('click', this.handleDotClickBound);
    }
    console.log("Render completed. InnerHTML length:", this.innerHTML.length);
    this.updateDotsActiveState && this.updateDotsActiveState();
  }

  // Permitir que el índice se cambie desde fuera (por ejemplo, desde los dots externos)
  setCurrentIndex(idx) {
    if (typeof idx === 'number' && idx >= 0 && idx < this.comparisons.length) {
      this.currentIndex = idx;
      this.updateImageDisplay();
    }
  }
}