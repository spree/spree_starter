Spree::Image.class_eval do
  has_attached_file :attachment,
                    styles: {
                      mini: {
                        geometry: '48x48>',
                        source_file_options: '-density 500 -quality 100'
                      },
                      small: {
                        geometry: '100x100>',
                        source_file_options: '-density 500 -quality 100'
                      },
                      product: {
                        geometry: '240x240>',
                        source_file_options: '-density 500 -quality 100'
                      },
                      large: {
                        geometry: '600x600>',
                        source_file_options: '-density 500 -quality 100'
                      }
                    },
                    default_style: :product,
                    convert_options: {
                      all: '-strip -auto-orient -colorspace sRGB'
                    }
end
