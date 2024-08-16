import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import './ind.css';

export default function Layout2() {
  return (
    <div className='control-pane'>
            <div className='control-section card-control-section horizontal_card_layout'>
                <div className="e-card-resize-container">
                    <div className='row'>
                        <div className="row card-layout">
                            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                                <div className="e-card e-card-horizontal e-product" id="horizontal_phone_product">
                                    <div className="e-card-stacked">
                                        <div className="e-card-header">
                                            <div className="e-card-header-caption">
                                                <div className="e-card-header-title"> iPhone X</div>
                                                <div className="e-card-sub-title">Marketed by Apple Inc</div>
                                            </div>
                                        </div>
                                        <div className="e-card-content">
                                            The iPhone X has a 5.8-inch diagonal OLED color-accurate screen, has two cameras on the rear. One is a 12-megapixel with
                                            support for face detection. It is capable of capturing 4K video at 24, 30 or 60 frames per
                                            second. It supports Qi-standard wireless charging.
                                        </div>
                                        <div className="e-card-actions" style={{ justifyContent: 'center' }}>
                                            <button className="e-btn e-outline e-primary">
                                                <div className="e-size">Read More </div>
                                            </button>                                            
                                        </div>
                                    </div>
                                    <img src="/hero-desktop.png" alt="iPhone X" height="415px" style={{ width: '70%' }} />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
  );
}
